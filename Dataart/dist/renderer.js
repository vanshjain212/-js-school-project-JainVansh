import { setupModal } from './modal.js';
export function renderTimeline(events) {
    const timeline = document.getElementById("timeline");
    if (!timeline)
        return;
    events.forEach((event) => {
        var _a;
        const article = document.createElement("article");
        article.className = "event";
        article.innerHTML = `
      <h2>${event.year}</h2>
      <figure>
        <img src="${event.imageURL}" alt="${event.title}" />
        <figcaption>${event.title}</figcaption>
      </figure>
      <p>${event.description}</p>
      <button class="learn-more">Learn More</button>
    `;
        (_a = article.querySelector(".learn-more")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
            setupModal(event); // ✅ Pass full event object
        });
        timeline.appendChild(article);
    });
}
