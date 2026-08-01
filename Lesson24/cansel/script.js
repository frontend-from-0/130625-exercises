const postsContainer = document.getElementById('posts-container');
const loadingMsg = document.getElementById('loading-msg');

async function fetchPosts() {
  try {
    // ?_limit=10 query parameter restricts the API to return only 10 items
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const posts = await response.json();
    renderPosts(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    loadingMsg.textContent = 'Failed to load posts. Please try again later.';
  }
}

function renderPosts(posts) {
  postsContainer.innerHTML = '';

  posts.forEach(post => {
    const article = document.createElement('article');
    article.className = 'post-card';

    const title = document.createElement('h3');
    title.className = 'post-title';
    title.textContent = post.title;

    const body = document.createElement('p');
    body.className = 'post-body';
    body.textContent = post.body;

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Delete Post';
    deleteBtn.setAttribute('aria-label', `Delete post: ${post.title}`); 

    deleteBtn.addEventListener('click', () => deletePost(post.id, article, deleteBtn));

    article.appendChild(title);
    article.appendChild(body);
    article.appendChild(deleteBtn);

    postsContainer.appendChild(article);
  });
}

async function deletePost(postId, articleElement, buttonElement) {
  try {
    buttonElement.disabled = true;
    buttonElement.textContent = 'Deleting...';

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      console.log(`Success: DELETE request for post ID ${postId} returned status ${response.status}.`);
      
      articleElement.remove();
    } else {
      throw new Error('Failed to delete post on the server.');
    }
  } catch (error) {
    console.error('Error deleting post:', error);
    alert('Could not delete the post. Check console for details.');
    
    buttonElement.disabled = false;
    buttonElement.textContent = 'Delete Post';
  }
}

fetchPosts();