const BASE_URL = 'https://jsonplaceholder.typicode.com/';
const container = document.getElementById('postsContainer');

function getPost() {
  fetch(BASE_URL + 'posts') // network request to a server, waiting for response
    .then((response) => response.json()) // data arrives as a raw data .json() converts it into JS object or array 
    .then((data) => {
      const limitTen = data.slice(0, 10); // slice(start,end) creates a new array, takes 10 elements(index 0 to index 9) from array.
                                       // 0,1,2,3,4,5,6,7,8,9
      
      limitTen.forEach(post => createPost(post));  // you need to create 10 posts. It passes the current item (post) into the createPost() function
      // forEach:  for every single element in this list, run this specific function. 
      //do something with every item (like adding elements to the HTML/DOM)
    })
    .catch((error) => console.log("there is an", error)); // it logs the error to the console
}

getPost() // trigger. run the code inside of it now!

function createPost(post) {
  const newDiv = document.createElement('div'); // creates <div></div> tag. it exists in our JS but doesnt have any content
  newDiv.classList.add('style');// give my newDiv CSS class.

  // ${post.title} takes the title property from the post object and places it inside h3 tag. substring cuts specific characters from body
  newDiv.innerHTML = ` 
    <h3>${post.title}</h3> 
    <p>${post.body.substring(0, 100)}...</p> 
    <button class="delete-btn" data-id="${post.id}">delete</button>
  `; // data-id="${post.id}": This attaches the post's unique ID to the button. computer knows exactly which post to remove if the delete button is clicked.
  
  container.appendChild(newDiv); // puts the newDiv inside the container in the actual webpage 
}
container.addEventListener('click', (event) => {
  if (event.target.classList.contains('delete-btn')) {
    const postId = event.target.dataset.id;
    const postElement = event.target.parentElement;

    fetch(`${BASE_URL}posts/${postId}`, {
      method: 'DELETE',
    })
    .then((response) => {
      if (response.ok) {
        postElement.remove();
        console.log(`ID: ${postId}`);
      }
    })
    .catch((error) => console.error( error));
  }
});