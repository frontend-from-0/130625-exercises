const title = document.getElementById("title");
const body = document.getElementById("body");
const status = document.getElementById("status");
const createForm = document.getElementById("createForm");
const BASE_URL = "https://jsonplaceholder.typicode.com/";

createForm.addEventListener("submit", (e) => {
  e.preventDefault();
  status.textContent = "Creating notice...";
  const createdPost = {
    title: title.value,
    body: body.value,
  };
  fetch(`${BASE_URL}posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(createdPost),
  })
  .then(() => {
      status.textContent = "Notice created successfully.";
      createForm.reset();
    })
    .catch(() => {
      status.textContent = "Something went wrong.";
    });
});
