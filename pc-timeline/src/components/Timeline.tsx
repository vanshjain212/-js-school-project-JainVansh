import type { TimelineEvent } from '../types';
import { EventMarker } from './EventMarker';

export const Timeline = ({
  events,
  onSelect,
}: {
  events: TimelineEvent[];
  onSelect: (event: TimelineEvent) => void;
}) => (
  <section id="timeline">
    {events.map(event => (
      <EventMarker
        key={event.id}
        event={event}
        onClick={() => onSelect(event)}
      />
    ))}
  </section>
);
