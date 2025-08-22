import type { TimelineEvent } from '../types';

export const EventMarker = ({
  event,
  onClick,
}: {
  event: TimelineEvent;
  onClick: () => void;
}) => (
  <article className="event">
    <h3>{event.year}</h3>
    <figure>
      <img src={event.imageURL} alt={event.title} />
      <figcaption>{event.title}</figcaption>
    </figure>
    <p>{event.description}</p>
    <button onClick={onClick}>Learn More about {event.title}</button>
  </article>
);
