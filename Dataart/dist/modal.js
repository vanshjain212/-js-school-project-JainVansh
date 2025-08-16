export function setupModal(event) {
    var _a;
    const modal = document.getElementById("modal");
    if (!modal)
        return;
    modal.innerHTML = `
    <div class="modal-content">
      <h3>Event Details</h3>
      <p>Details for event ID: ${event.description}</p>
      <button id="close-modal">Close</button>
    </div>
  `;
    modal.style.display = "block";
    (_a = document.getElementById("close-modal")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
        modal.style.display = "none";
        modal.innerHTML = "";
    });
}
