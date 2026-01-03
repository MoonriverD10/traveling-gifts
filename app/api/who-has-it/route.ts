import { kv } from '@vercel/kv';
import { NextRequest, NextResponse } from 'next/server';

export interface WhoHasItEntry {
  id: string;
  name: string;
  location: string;
  city: string;
  state: string;
  country: string;
  dateReceived: string;
  story: string;
  timestamp: number;
}

// POST - Submit new "Who Has It" entry
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    if (!body.name || !body.location) {
      return NextResponse.json(
        { error: 'Name and location are required' },
        { status: 400 }
      );
    }

    // Create entry with unique ID
    const entry: WhoHasItEntry = {
      id: `who-has-it:${Date.now()}`,
      name: body.name,
      location: body.location,
      city: body.city || '',
      state: body.state || '',
      country: body.country || '',
      dateReceived: body.dateReceived || new Date().toISOString(),
      story: body.story || '',
      timestamp: Date.now(),
    };

    // Store in Vercel KV
    await kv.set(entry.id, entry);
    
    // Add to sorted set for easy retrieval
    await kv.zadd('who-has-it:timeline', {
      score: entry.timestamp,
      member: entry.id,
    });

    return NextResponse.json({ success: true, data: entry }, { status: 201 });
  } catch (error) {
    console.error('Error creating entry:', error);
    return NextResponse.json(
      { error: 'Failed to create entry' },
      { status: 500 }
    );
  }
}

// GET - Retrieve all entries
export async function GET() {
  try {
    // Get all entry IDs from sorted set (newest first)
    const entryIds = await kv.zrange('who-has-it:timeline', 0, -1, {
      rev: true,
    });

    if (!entryIds || entryIds.length === 0) {
      return NextResponse.json({ data: [] });
    }

    // Fetch all entries
    const entries = await Promise.all(
      entryIds.map((id) => kv.get<WhoHasItEntry>(id as string))
    );

    // Filter out null values
    const validEntries = entries.filter((entry): entry is WhoHasItEntry => entry !== null);

    return NextResponse.json({ data: validEntries });
  } catch (error) {
    console.error('Error fetching entries:', error);
    return NextResponse.json(
      { error: 'Failed to fetch entries' },
      { status: 500 }
    );
  }
}
