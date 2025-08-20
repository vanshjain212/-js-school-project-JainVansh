import { useEffect, useState } from 'react';
import type { TimelineEvent } from './types';
import { Header } from './components/Header';
import { Timeline } from './components/Timeline';
import { EventModal } from './components/EventModal';
import './styles/style.css';

function App() {
  const [events, setEvents] = useState<TimelineEvent[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null);

  useEffect(() => {
    fetch('./data/events.json')
      .then(res => res.json())
      .then(setEvents)
      .catch(console.error);
  }, []);

  const toggleTheme = () => {
    document.body.classList.toggle('dark');
  };

  return (
    <>
      <Header toggleTheme={toggleTheme} />
      <Timeline events={events} onSelect={setSelectedEvent} />
      {selectedEvent && (
        <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
      )}
    </>
  );
}

export default App;
