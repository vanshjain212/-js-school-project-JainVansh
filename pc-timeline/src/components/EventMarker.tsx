import type { TimelineEvent } from '../types';

export const EventMarker = ({
  event,
  onClick,
}: {
  event: TimelineEvent;
  onClick: () => void;
}) => (
  <article className="event">
    <h2>{event.year}</h2>
    <figure>
      <img src={event.imageURL} alt={event.title} />
      <figcaption>{event.title}</figcaption>
    </figure>
    <p>{event.description}</p>
    <button onClick={onClick}>Learn More</button>
  </article>
);
