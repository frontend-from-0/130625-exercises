const URL = 'https://jsonplaceholder.typicode.com/posts';
const createForm = document.getElementById('createForm');

createForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const newPost = {
        title: document.getElementById('newTitle').value,
        body: document.getElementById('newBody').value,
        userId: 1
    };

   
    fetch(URL, {
        method: 'POST',
        body: JSON.stringify(newPost),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => response.json())
    .then((json) => {
        alert('Yeni post başarıyla oluşturuldu! (ID: ' + json.id + ')');
     
        window.location.href = '../../index.html';
    })
    .catch(error => console.error('Hata:', error));
});