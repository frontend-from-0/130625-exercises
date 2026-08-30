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

const URL = 'https://jsonplaceholder.typicode.com/posts';

const getPostsButton = document.getElementById('getPostsBtn');
getPostsButton.addEventListener('click', getPosts);

function getPosts() {
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
     
      document.getElementById('postsContainer').innerHTML = '';
      displayPosts(data);
    });
}

function displayPosts(posts) {
  const container = document.getElementById('postsContainer');
  container.innerHTML = '';

  
  posts.slice(0, 10).forEach((post) => { 
    const postCard = document.createElement('li');
    postCard.classList.add('card');

    const cardTitle = document.createElement('h2');
    cardTitle.innerText = post.title;
    cardTitle.classList.add('card-title');

    const cardBody = document.createElement('p');
    cardBody.innerText = post.body;
    cardBody.classList.add('card-body');

   
    const buttonGroup = document.createElement('div');
    buttonGroup.style.display = 'flex';
    buttonGroup.style.gap = '15px';
    buttonGroup.style.marginTop = '20px';

    const updateBtn = document.createElement('a');
    updateBtn.setAttribute(
      'href',
      `./posts/manage/index.html?postId=${post.id}`
    );
   
    updateBtn.innerHTML = '<i class="fas fa-edit"></i> Edit';
    updateBtn.classList.add('btn', 'btn-success');

    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '<i class="fas fa-trash"></i> Delete';
    deleteBtn.classList.add('btn', 'btn-danger');

    
    deleteBtn.addEventListener('click', () => deletePost(post.id, postCard));

    buttonGroup.appendChild(updateBtn);
    buttonGroup.appendChild(deleteBtn);

    postCard.appendChild(cardTitle);
    postCard.appendChild(cardBody);
    postCard.appendChild(buttonGroup);

    container.appendChild(postCard);
  });
}

function deletePost(postId, cardElement) {
  fetch(`${URL}/${postId}`, {
    method: 'DELETE',
  }).then((res) => {
    if (res.ok) {
     
      cardElement.remove(); 
      console.log('Post deleted successfully.');
    }
  });
}