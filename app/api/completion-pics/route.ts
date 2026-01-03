import { NextRequest, NextResponse } from 'next/server';
import { put, list, del } from '@vercel/blob';

interface CompletionPic {
  id: string;
  imageUrl: string;
  caption: string;
  submittedBy: string;
  location: string;
  dateCompleted: string;
  createdAt: string;
}

const METADATA_BLOB_NAME = 'completion-pics-metadata.json';

async function getMetadata(): Promise<CompletionPic[]> {
  try {
    const { blobs } = await list({ prefix: METADATA_BLOB_NAME });
    if (blobs.length === 0) return [];
    
    const response = await fetch(blobs[0].url);
    if (!response.ok) return [];
    
    return await response.json();
  } catch {
    return [];
  }
}

async function saveMetadata(pics: CompletionPic[]): Promise<void> {
  // Delete old metadata blob if exists
  try {
    const { blobs } = await list({ prefix: METADATA_BLOB_NAME });
    for (const blob of blobs) {
      await del(blob.url);
    }
  } catch {
    // Ignore deletion errors
  }
  
  // Save new metadata
  await put(METADATA_BLOB_NAME, JSON.stringify(pics), {
    access: 'public',
    contentType: 'application/json',
  });
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

    // Create entry
    const entry: CompletionPic = {
      id: `completion-pic:${Date.now()}`,
      imageUrl: blob.url,
      submittedBy: name,
      location: location || '',
      dateCompleted: completionDate || new Date().toISOString(),
      caption: caption || '',
      createdAt: new Date().toISOString(),
    };

    // Get existing metadata and add new entry
    const existingPics = await getMetadata();
    existingPics.unshift(entry); // Add to beginning
    await saveMetadata(existingPics);

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
    const pics = await getMetadata();
    return NextResponse.json({ data: pics });
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

    // Delete image from Vercel Blob
    await del(imageUrl);

    // Remove from metadata
    const existingPics = await getMetadata();
    const updatedPics = existingPics.filter(pic => pic.id !== id);
    await saveMetadata(updatedPics);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting pic:', error);
    return NextResponse.json(
      { error: 'Failed to delete picture' },
      { status: 500 }
    );
  }
}
