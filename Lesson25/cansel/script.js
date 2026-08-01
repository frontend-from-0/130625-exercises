const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

const postsContainer = document.getElementById('posts-container');
const postForm = document.getElementById('post-form');
const formTitle = document.getElementById('form-title');
const titleInput = document.getElementById('post-title');
const bodyInput = document.getElementById('post-body');
const submitBtn = document.getElementById('submit-btn');
const cancelBtn = document.getElementById('cancel-btn');

let currentPosts = [];
let isEditing = false;
let editingPostId = null;

async function fetchPosts() {
  try {
    const response = await fetch(`${apiUrl}?_limit=10`);
    if (!response.ok) throw new Error('Network response was not ok');
    
    currentPosts = await response.json();
    renderPosts();
  } catch (error) {
    console.error('Error fetching posts:', error);
    postsContainer.innerHTML = '<p>Error loading posts. Please try again later.</p>';
  }
}

function renderPosts() {
  postsContainer.innerHTML = '';
  
  if (currentPosts.length === 0) {
    postsContainer.innerHTML = '<p>No posts available.</p>';
    return;
  }

  currentPosts.forEach(post => {
    const article = document.createElement('article');
    article.className = 'post-card';

    const title = document.createElement('h3');
    title.className = 'post-title';
    title.textContent = post.title;

    const body = document.createElement('p');
    body.className = 'post-body';
    body.textContent = post.body;

    const actionsDiv = document.createElement('div');
    actionsDiv.className = 'post-actions';

    const editBtn = document.createElement('button');
    editBtn.className = 'btn-warning';
    editBtn.textContent = 'Edit';
    editBtn.setAttribute('aria-label', `Edit post: ${post.title}`);
    editBtn.addEventListener('click', () => startEditing(post));

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn-danger';
    deleteBtn.textContent = 'Delete';
    deleteBtn.setAttribute('aria-label', `Delete post: ${post.title}`);
    deleteBtn.addEventListener('click', () => deletePost(post.id, deleteBtn));

    actionsDiv.appendChild(editBtn);
    actionsDiv.appendChild(deleteBtn);

    article.appendChild(title);
    article.appendChild(body);
    article.appendChild(actionsDiv);

    postsContainer.prepend(article);
  });
}

postForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const postData = {
    title: titleInput.value.trim(),
    body: bodyInput.value.trim(),
    userId: 1
  };

  if (!postData.title || !postData.body) {
    alert('Please fill in all fields.');
    return;
  }

  submitBtn.disabled = true;

  if (isEditing) {
    await updatePost(editingPostId, postData);
  } else {
    await createPost(postData);
  }

  submitBtn.disabled = false;
});

async function createPost(postData) {
  try {
    submitBtn.textContent = 'Adding...';
    
    const response = await fetch(apiUrl, {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    });
    
    if (!response.ok) throw new Error('Failed to create post');
    
    const newPost = await response.json();
    
    currentPosts.push(newPost);
    renderPosts();
    resetForm();
    alert('Post created successfully!');
    
  } catch (error) {
    console.error('Error creating post:', error);
    alert('Could not create the post.');
  }
}

function startEditing(post) {
  isEditing = true;
  editingPostId = post.id;
  
  titleInput.value = post.title;
  bodyInput.value = post.body;
  
  formTitle.textContent = 'Edit Post';
  submitBtn.textContent = 'Update Post';
  cancelBtn.classList.remove('hidden');
  
  postForm.scrollIntoView({ behavior: 'smooth' });
}

cancelBtn.addEventListener('click', resetForm);

function resetForm() {
  postForm.reset();
  isEditing = false;
  editingPostId = null;
  formTitle.textContent = 'Create a New Post';
  submitBtn.textContent = 'Add Post';
  cancelBtn.classList.add('hidden');
}

async function updatePost(id, postData) {
  try {
    submitBtn.textContent = 'Updating...';
    
    const response = await fetch(`${apiUrl}/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ ...postData, id }),
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    });
    
    if (!response.ok) throw new Error('Failed to update post');
    
    const updatedPost = await response.json();
    
    const index = currentPosts.findIndex(p => p.id === id);
    if (index !== -1) {
      currentPosts[index] = updatedPost;
    }
    
    renderPosts();
    resetForm();
    alert('Post updated successfully!');
    
  } catch (error) {
    console.error('Error updating post:', error);
    alert('Could not update the post.');
  }
}

async function deletePost(id, buttonElement) {
  if (!confirm('Are you sure you want to delete this post?')) return;
  
  try {
    buttonElement.disabled = true;
    buttonElement.textContent = 'Deleting...';
    
    const response = await fetch(`${apiUrl}/${id}`, {
      method: 'DELETE',
    });
    
    if (!response.ok) throw new Error('Failed to delete post');
    
    currentPosts = currentPosts.filter(p => p.id !== id);
    renderPosts();
    
    console.log(`Successfully deleted post with ID: ${id}`);
    
  } catch (error) {
    console.error('Error deleting post:', error);
    alert('Could not delete the post.');
    buttonElement.disabled = false;
    buttonElement.textContent = 'Delete';
  }
}

fetchPosts();