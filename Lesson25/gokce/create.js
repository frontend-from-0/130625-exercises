const submitBtn = document.getElementById("submit");
const postTextTitle = document.getElementById("text-title");
const postTextBody = document.getElementById("text-body");
const URL = "https://jsonplaceholder.typicode.com/posts";
const successMessage = document.getElementById("success");
const regexTitle = /^[a-zA-Z0-9\s,.?!()'-]{10,80}$/;
const regexBody = /^[a-zA-Z0-9\s,.?!()'-]{20,300}$/;


const postTitleError =document.getElementById("titleError");
const postBodyError =document.getElementById("bodyError");
let isValid=true;



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


submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  validateForm();
  if(!isValid){
    return;
  }
  const newPost = {
    title: postTextTitle.value,
    body: postTextBody.value,
  };
  fetch(URL, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(newPost),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("Created Post:", data);
      successMessage.textContent = "Post created successfully!";
      setTimeout(() => {
        successMessage.textContent = "";
        window.location.href = "./index.html";
      }, 3000);
    });
});
