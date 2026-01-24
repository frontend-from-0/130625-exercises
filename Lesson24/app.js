const BASE_URL = "https://jsonplaceholder.typicode.com/";

function getPosts() {
  fetch(BASE_URL + "posts")
    .then((response) => response.json())
    .then((data) => {
      const firtsTenPosts = data.slice(0, 10);
      console.table(firtsTenPosts);
      addAndRemovePosts(firtsTenPosts);
    });
}

function addAndRemovePosts(posts) {
  const mainContainer = document.getElementById("postList");
  


  posts.forEach((post,colorindex) => {
    const postContainer = document.createElement("div");
    postContainer.style.backgroundColor = colors[colorindex];
    postContainer.classList.add("post");

    const postId = document.createElement("p");
    postId.innerText = post.id;
    postId.classList.add("post-id")

    const postTitle = document.createElement("h1");
    postTitle.innerText = post.title;
    postTitle.classList.add("post-title");

    const postBody = document.createElement("p");
    postBody.innerText = post.body;
    postBody.classList.add("post-body")
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.innerText = "Delete";
    deleteButton.setAttribute("aria-label", `Delete post ID: ${post.id}`);

    const deleteMessage = document.createElement("p");
    deleteMessage.setAttribute("role", "status");
    deleteMessage.innerText = `Post ID:${post.id} has been deleted.`;
    deleteMessage.classList.add("message", "hidden");

    deleteButton.addEventListener("click", () => deletePost(post.id,postContainer,deleteMessage));

    postContainer.appendChild(postId);
    postContainer.appendChild(postTitle);
    postContainer.appendChild(postBody);
    postContainer.appendChild(deleteButton);
    mainContainer.appendChild(postContainer);
    mainContainer.appendChild(deleteMessage);
  });
}

const colors = [
    "#E9EDC9",
    "#FEFAE0",
    "#FAEDCD",
    "#D4A373",
    "#AC7035",
    "#F4F1DE",
    "#E07A5F",
    "#878fd4",
    "#81B29A",
    "#F2CC8F"
  ];

function deletePost(postId,containerElement,deleteMessageElement) {
 fetch(`${BASE_URL}posts/${postId}`, {
        method: "DELETE",
      })
.then((res) => {
    if (res.ok) {
      console.log('Post deleted successfully.');
      containerElement.classList.add("hidden");
      deleteMessageElement.classList.remove("hidden");
    } else {
      console.log('Unsuccessful request');
    }
  });

}


document.addEventListener("DOMContentLoaded", () => getPosts());