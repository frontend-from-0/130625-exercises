
const params = new URLSearchParams(document.location.search);
const postId = params.get('postId');
const URL = 'https://jsonplaceholder.typicode.com/posts';


const updateForm = document.getElementById('updateForm');
const titleInput = document.getElementById('title');
const bodyInput = document.getElementById('body');


if (postId) {
    fetch(`${URL}/${postId}`)
        .then(response => response.json())
        .then(post => {
            titleInput.value = post.title;
            bodyInput.value = post.body;
        })
        .catch(error => console.error('Hata:', error));
}


updateForm.addEventListener('submit', (e) => {
    e.preventDefault(); 

    const updatedData = {
        title: titleInput.value,
        body: bodyInput.value,
        userId: 1
    };

  
    fetch(`${URL}/${postId}`, {
        method: 'PUT', 
        body: JSON.stringify(updatedData),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => {
        if (response.ok) {
            alert('Post başarıyla güncellendi!');
         
            window.location.href = '../../index.html';
        }
    })
    .catch(error => console.error('Güncelleme hatası:', error));
});