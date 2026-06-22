const BASE_URL = "https://jsonplaceholder.typicode.com/";

const hero = document.getElementById("hero");
const content = document.querySelector(".content");
const loadBtn = document.getElementById("loadPlaces");
const sectionTitle = document.querySelector(".section-title");
const placesContainer = document.getElementById("places");

content.style.display = "none";
sectionTitle.style.display = "none";

function getPosts() {
  placesContainer.innerHTML = "";

  fetch(BASE_URL + "posts")
    .then((response) => {
      if (!response.ok) throw new Error("An error occured!");
      return response.json();
    })
    .then((posts) => {
      posts.slice(0, 10).forEach((post) => {
        const card = document.createElement("article");
        card.classList.add("post");
        card.dataset.id = post.id;

        const title = document.createElement("h3");
        title.textContent = post.title;

        const body = document.createElement("p");
        body.textContent = post.body;

        const deleteBtn = document.createElement("button");
        deleteBtn.type = "button";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.textContent = "Delete";

        card.appendChild(title);
        card.appendChild(body);
        card.appendChild(deleteBtn);

        placesContainer.appendChild(card);
      });
    })
    .catch((error) => console.error("An error occured:", error));
}

placesContainer.addEventListener("click", (e) => {
  const deleteBtn = e.target.closest(".delete-btn");
  if (!deleteBtn) return;

  const card = deleteBtn.closest(".post");
  if (!card) return;

  const postId = card.dataset.id;

  fetch(BASE_URL + "posts/" + postId, { method: "DELETE" })
    .then((response) => {
      if (!response.ok) throw new Error("Delete failed");
      card.remove();
    })
    .catch((error) => console.error("Delete error:", error));
});

loadBtn.addEventListener("click", () => {
  hero.style.display = "none";
  content.style.display = "block";
  sectionTitle.style.display = "block";
  getPosts();
});
