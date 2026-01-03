import { NextRequest, NextResponse } from 'next/server';

interface Traveler {
  id: string;
  name: string;
  city: string;
  state: string;
  country: string;
  dateReceived: string;
  story: string;
  createdAt: string;
}

// In-memory store (resets on redeploy - replace with DB later)
let travelers: Traveler[] = [];

export async function GET() {
  return NextResponse.json(travelers);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, city, state, country, dateReceived, story } = body;

    if (!name || !city || !state || !country || !dateReceived) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const newTraveler: Traveler = {
      id: Date.now().toString(),
      name,
      city,
      state,
      country,
      dateReceived,
      story: story || '',
      createdAt: new Date().toISOString(),
    };

    travelers.unshift(newTraveler);
    return NextResponse.json(newTraveler, { status: 201 });

  } catch (error) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}
