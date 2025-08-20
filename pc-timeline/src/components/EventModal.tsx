import { createPortal } from 'react-dom';
import type { TimelineEvent } from '../types';

export const EventModal = ({
  event,
  onClose,
}: {
  event: TimelineEvent;
  onClose: () => void;
}) => {
  const modalRoot = document.getElementById('modal-root');
  if (!modalRoot) return null;

  return createPortal(
    <div className="modal-content">
      <h2>{event.title} ({event.year})</h2>
      <img src={event.imageURL} alt={event.title} />
      <p>{event.description}</p>
      <button onClick={onClose}>Close</button>
    </div>,
    modalRoot
  );
};
