import { TimelineEvent } from './types.js';

export async function fetchEvents(): Promise<TimelineEvent[]> {
  const res = await fetch('data/events.json');
  if (!res.ok) throw new Error('Failed to fetch events');
  return res.json();
}
