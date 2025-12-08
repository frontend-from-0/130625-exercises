const BASE_URL = "https://jsonplaceholder.typicode.com/";

function getPosts() {
  fetch(BASE_URL + "posts")
    .then((response) => response.json())
    .then((data) => {
      const firstTenPosts = data.slice(0, 10); // Because the limit property is not available at jsonplaceholder, I used slice methods to fetch the first 10 posts.
      console.table(firstTenPosts);
      addAndRemovePosts(firstTenPosts);
    });
}

function addAndRemovePosts(posts) {
  const container = document.getElementById("postsContainer");
  const colors = [
    "#FEC5BB",
    "#FCD5CE",
    "#FAE1DD",
    "#F8EDEB",
    "#E8E8E4",
    "#D8E2DC",
    "#ECE4DB",
    "#FFE5D9",
    "#FFD7BA",
    "#FEC89A",
  ];
  for (let i = 0; i < posts.length; i++) {
    const newP = document.createElement("p");
    newP.style.backgroundColor = colors[i];
    newP.classList.add("posts");
    newP.innerHTML = `<strong> ID: </strong> ${posts[i].id}<br><br>
   <strong> title: </strong> ${posts[i].title} <br>
   <strong> body: </strong> ${posts[i].body}`;

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("deletebutton");
    deleteButton.innerText = "Delete";
    deleteButton.setAttribute("aria-label", `Delete post with ID ${posts[i].id}`);

    const deleteMessage = document.createElement("p");
    deleteMessage.setAttribute("role", "status"); 
    deleteMessage.innerText = `Post with ID number ${posts[i].id} has been deleted.`;
    deleteMessage.classList.add("deletemessage", "hidden");

    deleteButton.addEventListener("click", () => {
      fetch(`${BASE_URL}posts/${posts[i].id}`, {
        method: "DELETE",
      });
      newP.classList.add("hidden");
      deleteMessage.classList.remove("hidden");
    });

    newP.appendChild(deleteButton);
    container.appendChild(newP);
    container.appendChild(deleteMessage);
    
  }
}

document.addEventListener("DOMContentLoaded", () => getPosts());
