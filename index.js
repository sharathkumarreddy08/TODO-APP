let form=document.getElementById('form')
let input=document.getElementById('input')
let msg=document.getElementById('msg')
let posts=document.getElementById('posts')
console.log(form);
console.log(input);
console.log(msg);
console.log(posts);


form.addEventListener("submit",e=>{
    e.preventDefault();
    console.log("button clicked");
    formValidation();
})
let formValidation=()=>{
    if(input.value===""){
        msg.innerHTML='TODO cant be blanked';
        console.log("failed")
    }else{
        console.log("success");
        msg.innerHTML="";
        acceptData();
       createPosts();
       
    }
}
let data = {};
let acceptData= ()=>{
    data["text"]= input.value;
    console.log(data);
}
let createPosts=()=>{
    posts.innerHTML +=`
    <div>
       <p>${data.text}</p>
       <span class="option">
       <i  onClick="editpost(this)"  class="fa fa-edit"></i>
       <i onClick="deletepost(this)" class="fa fa-trash"></i></span>
       </div>
    `;
    input.value="";
}
let deletepost= (e)=>{
    console.log("deleted called")
    e.parentElement.parentElement.remove();
}
let editpost =(e)=>{
    console.log('edit called')
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
}