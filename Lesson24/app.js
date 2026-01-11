const BASE_URL = "https://jsonplaceholder.typicode.com/";

function getPosts() {
  fetch(BASE_URL + "posts")
    .then((response) => response.json())
    .then((data) => {
      const sixBox = data.slice(0, 6);
      console.table(sixBox);
      addAndRemovePosts(sixBox);
    });
}

function addAndRemovePosts(posts) {
  const infoBox = document.getElementById("infoBox");
  const colors = [
    "#CCD5AE",
    "#E9EDC9",
    "#FEFAE0",
    "#FAEDCD",
    "#D4A373",
    "#AC7035",
   
  ];


  posts.forEach((post,colorindex) => {
    const postContainer = document.createElement("div");
    postContainer.style.backgroundColor = colors[colorindex];
    postContainer.classList.add("post");

    const postId = document.createElement("p");
    postId.innerText = post.id;
    postId.classList.add("postid")

    const postTitle = document.createElement("p");
    postTitle.innerText = post.title;
    postTitle.classList.add("posttitle");

    const postBody = document.createElement("p");
    postBody.innerText = post.body;
    postBody.classList.add("postbody")

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("deletebutton");
    deleteButton.innerText = "Delete";
    deleteButton.setAttribute("aria-label", `Delete post ID: ${post.id}`);

    const deleteMessage = document.createElement("p");
    deleteMessage.setAttribute("role", "status");
    deleteMessage.innerText = `Post ID:${post.id} has been deleted.`;
    deleteMessage.classList.add("message", "hidden");

    deleteButton.addEventListener("click", () => deletePost(post.id,postContainer,deleteMessage));

    infoBox.appendChild(postContainer);
    postContainer.appendChild(postId);
    postContainer.appendChild(postTitle);
    postContainer.appendChild(postBody);
    postContainer.appendChild(deleteButton);
    infoBox.appendChild(deleteMessage);
  });
}

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