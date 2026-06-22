
function createPost() {
  const newTitle = document.getElementById("titleInput").value;
  const newBody = document.getElementById("bodyInput").value;
  const msg = document.getElementById("successMessage");
  
    if (!newTitle || !newBody) {
    msg.textContent = "Please fill in both the title and body sections.";
    msg.classList.remove("hidden");
    msg.setAttribute("role", "status");
    msg.style.color = "red";
    return;
  }
  
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: newTitle,
      body: newBody,
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      msg.innerText = "New post is created!";
      msg.classList.remove("hidden");
      msg.style.color = "#45a049";
    });
}

document.getElementById("createBtn").addEventListener("click", createPost )