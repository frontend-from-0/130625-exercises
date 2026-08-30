const API_URL = "https://jsonplaceholder.typicode.com/posts";

async function fetchPosts() {
    try {
        const response = await fetch(`${API_URL}?_limit=9`);
        const posts = await response.json();
        renderPosts(posts);
    } catch (error) {
        console.error("Hata oluştu:", error);
        document.getElementById('posts-grid').innerHTML = "Veriler yüklenemedi.";
    }
}


function renderPosts(posts) {
    const container = document.getElementById('posts-grid');
    container.innerHTML = ""; 

    posts.forEach(post => {
        const card = document.createElement('div');
        card.className = 'post-card';
        card.id = `post-${post.id}`;

        card.innerHTML = `
            <span class="post-id">Post #${post.id}</span>
            <h3 class="post-title">${post.title}</h3>
            <p class="post-body">${post.body}</p>
            <button class="delete-btn" onclick="handleDelete(${post.id})">Delete</button>
        `;
        container.appendChild(card);
    });
}


async function handleDelete(postId) {
    const card = document.getElementById(`post-${postId}`);
    
   
    try {
        const response = await fetch(`${API_URL}/${postId}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            console.log(`Post ${postId} network üzerinde başarıyla silindi.`);
            
            card.classList.add('fade-out');
            setTimeout(() => card.remove(), 400);
        }
    } catch (error) {
        alert("Silme işlemi sırasında hata oluştu.");
    }
}


document.addEventListener('DOMContentLoaded', fetchPosts);