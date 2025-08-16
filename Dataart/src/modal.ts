import { TimelineEvent } from './types.js';

export function setupModal(event: TimelineEvent): void {
  const modal = document.getElementById("modal");
  if (!modal) return;

  modal.innerHTML = `
    <div class="modal-content">
      <h3>Event Details</h3>
      <p>Details for event ID: ${event.description}</p>
      <button id="close-modal">Close</button>
    </div>
  `;
  modal.style.display = "block";

  document.getElementById("close-modal")?.addEventListener("click", () => {
    modal.style.display = "none";
    modal.innerHTML = "";
  });
}
