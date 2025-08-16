import { fetchEvents } from './fetcher.js';
import { renderTimeline } from './renderer.js';

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const events = await fetchEvents();
    renderTimeline(events); // This will internally call showModal(event)
  } catch (err) {
    console.error("Failed to load events:", err);
  }
});

