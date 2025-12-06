const postContainer = document.getElementById("posts-container");
const statusMessage = document.getElementById("status-message");
const toggleButton = document.getElementById("toggle-nav");

toggleButton.addEventListener("click", () => {
  const navList = document.querySelector(".nav-container ul");
  navList.classList.toggle("mobile-open");
});

fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
  .then((response) => response.json())
  .then((posts) =>
    posts.forEach((post) => {
      const createPost = document.createElement("div");
      createPost.classList.add("post-card");

      createPost.innerHTML = `
 <div class="post-content"> 
 <h2 class="post-title">${post.title}</h2>
 <p class="post-body">${post.body}</p>
 <button aria-label="Delete post" id=${post.id} class="delete-btn">Delete</button>
 </div>
 
 `;
      const deleteButton = createPost.querySelector(".delete-btn"); // döngüde o an seçilen postun butonunu seçmemiz lazım

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
    }) //Cevap gelirse, eğer durum kodu 200'lü değilse  bir hata fırlatılıcak
    .catch((error) =>
      console.error("There was a problem with the delete request:", error),
    ) //Eğer 2. adımda hata fırlatılırsa, zincir buraya atlar ve hatayı konsola yazar (Kullanıcıya bilgi verir).
    .then(() => {
      createPost.classList.add("deleted");
      statusMessage.textContent = `Post : ${id} has been deleted successfully.`;
      setTimeout(() => {
        statusMessage.textContent = "";
      }, 3000);
    });
}
