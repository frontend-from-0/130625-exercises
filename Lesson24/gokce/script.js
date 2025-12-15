const postContainer = document.getElementById("posts-container");
const statusMessage = document.getElementById("status-message");
const toggleButton = document.getElementById("toggle-nav");
const navList = document.querySelector(".nav-container ul");

toggleButton.addEventListener("click", () => {
  navList.classList.toggle("mobile-open");
});

fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
  .then((response) => response.json())
  .then((posts) =>
    posts.forEach((post) => {
      const createPost = document.createElement("div");
      createPost.classList.add("post-card");

      const postContent=document.createElement("div");
      postContent.classList.add("post-content");

      const postTitle=document.createElement("h2");
      postTitle.classList.add("post-title");
      postTitle.textContent=post.title;

      const postBody=document.createElement("p");
      postBody.classList.add("post-body");
      postBody.textContent=post.body;

      const deleteButton=document.createElement("button");
      deleteButton.setAttribute("aria-label","Delete post");
      deleteButton.id=post.id;
      deleteButton.classList.add("delete-btn");
      deleteButton.textContent="Delete";

      createPost.appendChild(postContent);
      postContent.appendChild(postTitle);
      postContent.appendChild(postBody);
      postContent.appendChild(deleteButton);

    


  
      deleteButton.addEventListener("click", () =>
        handleDelete(post.id, createPost),
      );

      postContainer.appendChild(createPost);
    }),
  );

function handleDelete(id, createPost) {
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok");
    createPost.classList.add("deleted");
      statusMessage.textContent = `Post : ${id} has been deleted successfully.`;
      setTimeout(() => {
        statusMessage.textContent = "";
      }, 3000);
    }) 
    .catch((error) =>
      console.error("There was a problem with the delete request:", error),
    ) //Eğer 2. adımda hata fırlatılırsa, zincir buraya atlar ve hatayı konsola yazar (Kullanıcıya bilgi verir).
    ;
}
