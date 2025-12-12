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
  const mainContainer = document.getElementById("mainContainer");
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
    deleteButton.setAttribute("aria-label", `Delete post with ID ${post.id}`);

    const deleteMessage = document.createElement("p");
    deleteMessage.setAttribute("role", "status");
    deleteMessage.innerText = `Post with ID number ${post.id} has been deleted.`;
    deleteMessage.classList.add("message", "hidden");

    deleteButton.addEventListener("click", () => deletePost(post.id,postContainer,deleteMessage));

    mainContainer.appendChild(postContainer);
    postContainer.appendChild(postId);
    postContainer.appendChild(postTitle);
    postContainer.appendChild(postBody);
    postContainer.appendChild(deleteButton);
    mainContainer.appendChild(deleteMessage);
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
      console.log('Attempt to delete a post was unsuccessful.');
    }
  });

}


document.addEventListener("DOMContentLoaded", () => getPosts());
