/* 
CRUD - set of basic operations or functions that are commonly used in the context of database management and web applications to manage and manipulate data.

C - create - POST method (has request body to transfer data)
R - read - GET method (cannot have request body to send data to the server)
U - update - PUT / PATCH method (have request body to transfer data)
D - delete - DELETE method


Status codes
HTTP status codes are three-digit numbers that the server sends in response to a client's request made to a web server. They provide information about the outcome of the request, whether it was successful, encountered an error, or requires further action. HTTP status codes are grouped into several ranges, each indicating a different category of response.

100... - Informational Responses
200... - Successful Responses (200 OK, 201 Created, 204 No content)
300.. - redirection (301 Moved Permanently, Found (or 307 Temporary Redirect))
400... - Errors (400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found)
500... - Service error (500 Internal Server Error, 502 Bad Gateway, 503 Service Unavailable)
*/

const URL = "https://jsonplaceholder.typicode.com/posts";

const getPostsButton = document.getElementById("getPostsBtn");
getPostsButton.addEventListener("click", getPosts);

function getPosts() {
  fetch(URL)
    .then((response) => response.json())
    .then((data) => displayPosts(data));
}

function displayPosts(posts) {
  posts.forEach((post) => {
    const cardTitle = document.createElement("h2");
    cardTitle.innerText = post.title;
    cardTitle.classList.add("card-title");

    const cardBody = document.createElement("p");
    cardBody.innerText = post.body;
    cardBody.classList.add("card-body");

    const updateBtn = document.createElement("a");
    updateBtn.setAttribute(
      "href",
      `./posts/manage/update.html?postId=${post.id}`
    );
    updateBtn.innerText = "Update post";
    updateBtn.classList.add("button", "button--success");
    updateBtn.setAttribute("aria-label", `Update post with ID ${post.id}`);

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete post";
    deleteBtn.classList.add("button", "button--danger");
    deleteBtn.setAttribute("aria-label", `Delete post with ID ${post.id}`);

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("mainbtn-container");

    const deleteMessage = document.createElement("p");
    deleteMessage.setAttribute("role", "status");
    deleteMessage.innerText = `Post with ID number ${post.id} has been deleted.`;
    deleteMessage.classList.add("hidden");

    deleteBtn.addEventListener("click", () =>
      deletePost(post.id, postCard, deleteMessage)
    );

    const postCard = document.createElement("li");
    postCard.classList.add("card");
    postCard.appendChild(cardTitle);
    postCard.appendChild(cardBody);
    postCard.appendChild(buttonContainer);
    buttonContainer.appendChild(updateBtn);
    buttonContainer.appendChild(deleteBtn);

    document.getElementById("postsContainer").appendChild(postCard);
  });
}



async function deletePost(postId, containerElement, deleteMessageElement) {
  console.log("Deleting post with id", postId);
  try {
    const response = await fetch(`${URL}/${postId}`, {
      method: "DELETE",
    });
    if (response.ok) {
      console.log("Post deleted successfully.");
      containerElement.innerText = "";
      deleteMessageElement.classList.remove("hidden");
      containerElement.appendChild(deleteMessageElement);
      deleteMessageElement.style.color = "#7a0916";
    } else {
      console.log("Attempt to delete a post was unsuccessful.");
    }
  } catch (error) {
    console.error("An error has occured", error);
  }
}

document.getElementById("createPostsBtn").addEventListener("click", () => {
  window.location.href = "./posts/manage/create.html";
});
