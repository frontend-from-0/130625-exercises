const params = new URLSearchParams(document.location.search);
const postId = params.get("postId");

console.log("postId", postId);

document.addEventListener("DOMContentLoaded", () => {
  const title = document.getElementById("title");
  const body = document.getElementById("body");
  const status = document.getElementById("status");
  const BASE_URL = "https://jsonplaceholder.typicode.com/";
  const updateForm = document.getElementById("updateForm");

  fetch(`${BASE_URL}posts/${postId}`)
    .then((response) => response.json())
    .then((data) => {
      title.value = data.title;
      body.value = data.body;
    });

  updateForm.addEventListener("submit", (e) => {
    e.preventDefault();
    status.textContent = "Updating...";
    const updatedPost = {
      title: title.value,
      body: body.value,
    };

    fetch(`${BASE_URL}posts/${postId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(updatedPost),
    })
      .then(() => {
        status.textContent = "Post updated successfully.";
      })
      .catch(() => {
        status.textContent = "Something went wrong.";
      });
  });
});
