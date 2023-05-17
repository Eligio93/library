
let myLibrary = [];
let openForm=document.getElementById("open_form");
let form=document.getElementById("form");
let quitForm=document.getElementById("quitForm");
let addBook=document.getElementById("addBook");


function Book(title, author, pages, read) {
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read 
}

function addBookToLibrary() {
    let title=document.getElementById("title").value;
    let author=document.getElementById("author").value;
    let pages=document.getElementById("pages").value;
    let read=document.querySelector("input[name='read']:checked").value;
    let book= new Book(title,author,pages,read);
    myLibrary.push(book);
}
function resetInputs(){
    document.getElementById("title").value="";
    document.getElementById("author").value="";
    document.getElementById("pages").value="";
}


//Opens and close the form
openForm.addEventListener("click",function(e){
    e.preventDefault();
    form.style.display="flex";
    
})
quitForm.addEventListener("click",function(e){
    e.preventDefault();
    form.style.display="none";
    
})

//Button that add the book to library
addBook.addEventListener("click",function(e){
    e.preventDefault();
    addBookToLibrary();
    resetInputs();
    form.style.display="none";

    console.log(myLibrary);

})
