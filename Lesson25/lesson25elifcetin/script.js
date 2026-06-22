const URL = 'https://jsonplaceholder.typicode.com/posts';

const getPostsButton = document.getElementById('getPostsBtn');
getPostsButton.addEventListener('click', getPosts);

function getPosts() {
  console.log('Button was clicked!');
  fetch(URL)
    .then((response) => response.json())
    .then((data) => displayPosts(data))
    .catch((error) => console.error(error));
}

/*
Requirements:
- It should be possible to fetch all posts at the same time, update a post, delete a post, create a new post.
- All pages should be styled, responsive and follow best accessibility practices.
*/


function displayPosts(posts) {
  posts.slice(0,10).forEach((post) => {

    const postCard = document.createElement('li');
    postCard.classList.add('card');

    const cardTitle = document.createElement('h2');
    cardTitle.innerText = post.title;

    const cardBody = document.createElement('p');
    cardBody.innerText = post.body;

    const updateBtn = document.createElement('button');
    updateBtn.innerText = 'Update post';
    updateBtn.classList.add('button', 'button--success');
    updateBtn.addEventListener('click', () =>
      updateButton(post.id, cardTitle, cardBody)
    );

    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete post';
    deleteBtn.classList.add('button', 'button--danger');
    deleteBtn.addEventListener('click', () =>
      deletePost(post.id, postCard)
    );

    const createPostBtn = document.createElement('button');
    createPostBtn.innerText = 'create post'
    createPostBtn.classList.add('button', 'button--success')
    createPostBtn.addEventListener('click', createPost)
    postCard.append(
      cardTitle,
      cardBody,
      updateBtn,
      deleteBtn,
      createPostBtn
    );

    document.getElementById('postsContainer').appendChild(postCard);
  });
}


function deletePost(postId, postElement) {
  console.log("deleting post with id", postId);
  fetch(`${URL}/${postId}`, { // fetch request is a promise. 
    method: "DELETE",
  }).then((res) => {
    if (res.ok) {
      console.log("Post deleted succedsfully");
      postElement.remove()
    } else {
      console.log("Attemt to delete post was unsuccessful.");
    }
  });
}

function updateButton(postId, titleElement, bodyElement) {
  console.log("updating post with id", postId);
  const updatedData = {
    id: 1,
    title: "foo",
    body: "dfghjobklvdfgb",
    userId: 1,
  };
  fetch(`${URL}/${postId}`, {
    method: "PUT",
    body: JSON.stringify(updatedData),

    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      titleElement.innerText = json.title;
      bodyElement.innerText = json.body;
    });
}

function createPost() {
  console.log("creating new post..");
  const title = prompt("create a new post title");
  const body = prompt("create post content");
  if (!title || !body) {
    alert("you must input data");
    return;
  }
  const newPost = {
    title: title,
    body: body,
    userId: 1,
  };
  fetch(URL, {
    method: "POST",
    body: JSON.stringify(newPost),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      const postCard = document.createElement("li");
      postCard.classList.add("card");
      const cardTitle = document.createElement("h2");
      cardTitle.innerText = newPost.title;
      const cardBody = document.createElement("p");
      cardBody.innerText = newPost.body;
      const updateBtn = document.createElement("button");
      updateBtn.innerText = "update data";
      updateBtn.classList.add("button", "button--success");
      updateBtn.addEventListener("click", () =>
        updateButton(json.id, cardTitle, cardBody)
      );
      const deleteBtn = document.createElement("button");
      deleteBtn.innerText = "update post";
      deleteBtn.classList.add("button", "button--danger");
      deleteBtn.addEventListener("click", () => deletePost(json.id, postCard));
      const createPostBtn = document.createElement("button");
      createPostBtn.innerText = "create post";
      createPostBtn.classList.add("button", "button--success");
      createPostBtn.addEventListener("click", createPost);
      postCard.append(cardTitle, cardBody, updateBtn, deleteBtn, createPostBtn);
      document.getElementById("postsContainer").appendChild(postCard);
    });
}


// setAttribute = yeni bir value vermek için veya yeni bir attribute ekleyebilmek için kullanıyoruz. 
// getAttribute = sadece var olan attribute bilgileri verir bize.



