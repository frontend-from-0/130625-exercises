const params = new URLSearchParams(document.location.search);

const postId = params.get("postId");

console.log("postId", postId);

const URL = "https://jsonplaceholder.typicode.com/posts";
const postTextTitle = document.getElementById("text-title");
const postTextBody = document.getElementById("text-body");
const postForm = document.getElementById("updatePostBtn");

const regexTitle = /^[a-zA-Z0-9\s,.?!()'-]{10,80}$/;
const regexBody = /^[a-zA-Z0-9\s,.?!()'-]{20,300}$/;


const postTitleError =document.getElementById("titleError");
const postBodyError =document.getElementById("bodyError");
let isValid=true;


function fetchPostData(postId) {
  fetch(`${URL}/${postId}`)
    .then((res) => {
      if (!res.ok)throw new Error("Network response was not ok");
      return res.json();})
    .then((postData) => displayedPost(postData))
    .catch((error)=>console.error("There has been a problem with your fetch operation:", error));
}
function displayedPost(postData) {
  console.log("postData", postData);
  postTextTitle.value = postData.title;
  postTextBody.value = postData.body;
}

function validatePostTitle(title){
    title = title.trim();
  if(!regexTitle.test(title)){
    postTitleError.innerText="Please enter min 10 max 80 charachers";
    postTitleError.classList.remove("hidden");
    postTextTitle.setAttribute("aria-invalid","true");
    postTextTitle.classList.add("invalid");
   isValid=false; 
  }else{
    postTitleError.innerText="";
    postTitleError.classList.add("hidden");
    postTextTitle.removeAttribute("aria-invalid");
    postTextTitle.classList.remove("invalid");
  }
 
}
function validatePostBody(body){
   body = body.trim();
  if(!regexBody.test(body)){
    postBodyError.innerText="Please enter min 20 max 300 charachers";
    postBodyError.classList.remove("hidden");
    postTextBody.setAttribute("aria-invalid","true");
    postTextBody.classList.add("invalid");
   isValid=false; 
  }else{
    postBodyError.innerText="";
    postBodyError.classList.add("hidden");
    postTextBody.removeAttribute("aria-invalid");
    postTextBody.classList.remove("invalid");
  }
 
}

postTextTitle.addEventListener("input", ()=>{
  validatePostTitle(postTextTitle.value);
});
postTextBody.addEventListener("input", ()=>{
  validatePostBody(postTextBody.value);
});

function validateForm(){
  isValid=true;
  validatePostTitle(postTextTitle.value);
  validatePostBody(postTextBody.value);
}

fetchPostData(postId);
const successMessage = document.getElementById("success");
document
  .getElementById("updatePostBtn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const updatedPost = {
      title: postTextTitle.value,
      body: postTextBody.value,
    };
    fetch(`${URL}/${postId}`, {
      method: "PATCH",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(updatedPost),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Updated Post:", data);
        validateForm();
        if(!isValid){
          return;
        }
        successMessage.textContent = `The post has been updated (ID: ${postId}) successfully.`;
        setTimeout(() => {
          successMessage.textContent = "";
          window.location.href = "../../index.html";
        }, 3000);
      });
  });
