import type { NextApiRequest, NextApiResponse } from 'next';

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

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, city, state, country, dateReceived, story } = req.body;

    if (!name || !city || !state || !country || !dateReceived) {
      return res.status(400).json({ error: 'Missing required fields' });
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
    return res.status(201).json(newTraveler);
  }

  if (req.method === 'GET') {
    return res.status(200).json(travelers);
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
