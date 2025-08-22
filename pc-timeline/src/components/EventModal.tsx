import { useEffect, useRef } from 'react';
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
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previousActiveElement = document.activeElement as HTMLElement;
    closeButtonRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      previousActiveElement?.focus();
    };
  }, [onClose]);

  if (!modalRoot) return null;

  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={e => e.stopPropagation()} // Prevents clicks inside the modal from closing it
      >
        <h2 id="modal-title">
          {event.title} ({event.year})
        </h2>
        <img src={event.imageURL} alt="" />
        <p>{event.description}</p>
        <button onClick={onClose} ref={closeButtonRef}>
          Close
        </button>
      </div>
    </div>,
    modalRoot
  );
};
