document.addEventListener("DOMContentLoaded", () => {
  const timeline = document.getElementById("timeline");
  const modal = document.getElementById("modal");

  // Fetch and render events
  fetch("events.json")
    .then(res => res.json())
    .then(events => {
      events.forEach(event => {
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
        timeline.appendChild(article);

        // Modal trigger
        article.querySelector(".learn-more").addEventListener("click", () => {
          modal.innerHTML = `
            <h2>${event.title} (${event.year})</h2>
            <img src="${event.imageURL}" alt="${event.title}" />
            <p>${event.description}</p>
            <button id="close-modal">Close</button>
          `;
          modal.style.display = "block";

          // Close handler
          document.getElementById("close-modal").addEventListener("click", () => {
            modal.style.display = "none";
            modal.innerHTML = "";
          });
        });
      });
    })
    .catch(err => console.error("Failed to load events:", err));
});
