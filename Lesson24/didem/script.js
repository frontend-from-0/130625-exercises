const API_URL = "https://jsonplaceholder.typicode.com/posts";

// 1. Verileri Çekme (Fetch)
async function fetchPosts() {
    try {
        const response = await fetch(`${API_URL}?_limit=9`); // Hoca 10 adet sınırı istemişti
        const posts = await response.json();
        renderPosts(posts);
    } catch (error) {
        console.error("Hata oluştu:", error);
        document.getElementById('posts-grid').innerHTML = "Veriler yüklenemedi.";
    }
}

// 2. HTML Elemanlarını Dinamik Oluşturma (createElement alternatifi şık yöntem)
function renderPosts(posts) {
    const container = document.getElementById('posts-grid');
    container.innerHTML = ""; // Loader'ı temizle

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

// 3. Silme İşlemi (DELETE Request)
async function handleDelete(postId) {
    const card = document.getElementById(`post-${postId}`);
    
    // Hoca: "Network tabında silme isteği görülmeli" demişti
    try {
        const response = await fetch(`${API_URL}/${postId}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            console.log(`Post ${postId} network üzerinde başarıyla silindi.`);
            // Arayüzden şık bir animasyonla kaldırıyoruz
            card.classList.add('fade-out');
            setTimeout(() => card.remove(), 400);
        }
    } catch (error) {
        alert("Silme işlemi sırasında hata oluştu.");
    }
}

// Sayfa yüklendiğinde başlat
document.addEventListener('DOMContentLoaded', fetchPosts);