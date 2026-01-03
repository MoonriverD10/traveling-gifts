import { put, del } from '@vercel/blob';
import { kv } from '@vercel/kv';
import { NextRequest, NextResponse } from 'next/server';

export interface CompletionPic {
  id: string;
  name: string;
  location: string;
  completionDate: string;
  caption: string;
  story: string;
  imageUrl: string;
  timestamp: number;
}

// POST - Upload new completion pic
export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const imageFile = formData.get('image') as File;
    const name = formData.get('name') as string;
    const location = formData.get('location') as string;
    const completionDate = formData.get('completionDate') as string;
    const caption = formData.get('caption') as string;
    const story = formData.get('story') as string;

    // Validate required fields
    if (!name || !imageFile) {
      return NextResponse.json(
        { error: 'Name and image are required' },
        { status: 400 }
      );
    }

    // Validate file type
    if (!imageFile.type.startsWith('image/')) {
      return NextResponse.json(
        { error: 'File must be an image' },
        { status: 400 }
      );
    }

    // Validate file size (5MB max)
    if (imageFile.size > 5 * 1024 * 1024) {
      return NextResponse.json(
        { error: 'Image must be less than 5MB' },
        { status: 400 }
      );
    }

    // Upload image to Vercel Blob
    const blob = await put(imageFile.name, imageFile, {
      access: 'public',
      addRandomSuffix: true,
    });

    // Create entry with unique ID
    const entry: CompletionPic = {
      id: `completion-pic:${Date.now()}`,
      name,
      location: location || '',
      completionDate: completionDate || new Date().toISOString(),
      caption: caption || '',
      story: story || '',
      imageUrl: blob.url,
      timestamp: Date.now(),
    };

    // Store metadata in Vercel KV
    await kv.set(entry.id, entry);
    
    // Add to sorted set for easy retrieval
    await kv.zadd('completion-pics:timeline', {
      score: entry.timestamp,
      member: entry.id,
    });

    return NextResponse.json({ success: true, data: entry }, { status: 201 });
  } catch (error) {
    console.error('Error uploading pic:', error);
    return NextResponse.json(
      { error: 'Failed to upload picture' },
      { status: 500 }
    );
  }
}

// GET - Retrieve all completion pics
export async function GET() {
  try {
    // Get all entry IDs from sorted set (newest first)
    const entryIds = await kv.zrange('completion-pics:timeline', 0, -1, {
      rev: true,
    });

    if (!entryIds || entryIds.length === 0) {
      return NextResponse.json({ data: [] });
    }

    // Fetch all entries
    const entries = await Promise.all(
      entryIds.map((id) => kv.get<CompletionPic>(id as string))
    );

    // Filter out null values
    const validEntries = entries.filter((entry): entry is CompletionPic => entry !== null);

    return NextResponse.json({ data: validEntries });
  } catch (error) {
    console.error('Error fetching pics:', error);
    return NextResponse.json(
      { error: 'Failed to fetch pictures' },
      { status: 500 }
    );
  }
}

// DELETE - Remove a completion pic
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const imageUrl = searchParams.get('imageUrl');

    if (!id || !imageUrl) {
      return NextResponse.json(
        { error: 'ID and imageUrl are required' },
        { status: 400 }
      );
    }

    // Delete from Vercel Blob
    await del(imageUrl);

    // Delete from KV
    await kv.del(id);
    await kv.zrem('completion-pics:timeline', id);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting pic:', error);
    return NextResponse.json(
      { error: 'Failed to delete picture' },
      { status: 500 }
    );
  }
}
