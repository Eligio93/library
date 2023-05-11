const newBook=document.getElementById("newbook");
const form=document.querySelector("form");
const addBook=document.getElementById("addBook");


newBook.addEventListener("click",function(){
    form.style.display="block";
})

addBook.addEventListener("click",function(event){
    event.preventDefault();
    form.style.display="none";
    

})