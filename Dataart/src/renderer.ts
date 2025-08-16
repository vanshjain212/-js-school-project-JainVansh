import { TimelineEvent } from './types.js';
import { setupModal } from './modal.js';

export function renderTimeline(events: TimelineEvent[]): void {
  const timeline = document.getElementById("timeline");
  if (!timeline) return;

  events.forEach((event) => {
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

    article.querySelector(".learn-more")?.addEventListener("click", () => {
      setupModal(event); // ✅ Pass full event object
    });

    timeline.appendChild(article);
  });
}
