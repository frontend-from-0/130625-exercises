const params = new URLSearchParams(document.location.search);

const postId = params.get("postId");

console.log("postId", postId);

function getPostById(id) {
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("titleInput").value = data.title;
      document.getElementById("bodyInput").value = data.body;
    });
}

document.addEventListener("DOMContentLoaded", () => getPostById(postId));

function updatePost(id) {
  const updatedTitle = document.getElementById("titleInput").value;
  const updatedBody = document.getElementById("bodyInput").value;

  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "PATCH",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      title: updatedTitle,
      body: updatedBody,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      const msg = document.getElementById("successMessage");
      msg.innerText = "Post is updated!";
      msg.style.color = "#45a049";
      msg.classList.remove("hidden");
    });
}

document
  .getElementById("updateBtn")
  .addEventListener("click", () => updatePost(postId));
