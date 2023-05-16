const openForm = document.getElementById("newbook"); //button to open the form to add a book
const form = document.querySelector("form"); //form for adding a book
const addBook = document.getElementById("addBook"); //button of the form which add a new Book
const quitForm= document.getElementById("quitForm");
let myLibrary = [];
const leftBar = document.querySelector(".leftbar");
let svgBook='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>book-open-blank-variant</title><path d="M21,5C19.89,4.65 18.67,4.5 17.5,4.5C15.55,4.5 13.45,4.9 12,6C10.55,4.9 8.45,4.5 6.5,4.5C4.55,4.5 2.45,4.9 1,6V20.65C1,20.9 1.25,21.15 1.5,21.15C1.6,21.15 1.65,21.1 1.75,21.1C3.1,20.45 5.05,20 6.5,20C8.45,20 10.55,20.4 12,21.5C13.35,20.65 15.8,20 17.5,20C19.15,20 20.85,20.3 22.25,21.05C22.35,21.1 22.4,21.1 22.5,21.1C22.75,21.1 23,20.85 23,20.6V6C22.4,5.55 21.75,5.25 21,5M21,18.5C19.9,18.15 18.7,18 17.5,18C15.8,18 13.35,18.65 12,19.5V8C13.35,7.15 15.8,6.5 17.5,6.5C18.7,6.5 19.9,6.65 21,7V18.5Z" /></svg>';

function book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
function displayBook(myLibrary) {
    //remove all the books from display
    leftBar.querySelectorAll("div").forEach((div) => {
        div.remove();
    });
    //re-insert all the books in myLibrary on display
    for (let i = 0; i < myLibrary.length; i++) {
        let newDiv = document.createElement("div");
        newDiv.classList.add("book_card");
        newDiv.setAttribute("data-book", i);
        leftBar.appendChild(newDiv);
        newDiv.innerHTML=svgBook;
        let cardTitle = document.createElement("p");
        cardTitle.id="card_title";
        cardTitle.textContent = myLibrary[i].title;
        newDiv.appendChild(cardTitle);
        let cardAuthor = document.createElement("p");
        cardAuthor.id="card_author";
        cardAuthor.textContent = myLibrary[i].author;
        newDiv.appendChild(cardAuthor);
        let cardPages = document.createElement("p");
        cardPages.id="card_pages"
        cardPages.textContent = myLibrary[i].pages;
        newDiv.appendChild(cardPages);
        let paragraph=document.createElement("p");
        paragraph.textContent="pages"
        newDiv.appendChild(paragraph);
        let paragraph2=document.createElement("p");
        paragraph2.textContent="Read?"
        newDiv.appendChild(paragraph2);
        let deleteBtn=document.createElement("button");
        deleteBtn.id="delbook";
        deleteBtn.textContent="X"
        newDiv.appendChild(deleteBtn);
    }
}

function addBookToLibrary() {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.querySelector("input[type='radio']:checked").value;
    const book1 = new book(title, author, pages, read);
    myLibrary.push(book1);
}
//Button that opens the form to add a book
openForm.addEventListener("click", function () {
    form.style.display = "flex";
    //reset input fields
    document.getElementById("title").value="";
    document.getElementById("author").value="";
    document.getElementById("pages").value="";
})
//Button that add the book to the Library
addBook.addEventListener("click", function (event) {
    event.preventDefault();
    if (form.checkValidity() == false) {
        form.reportValidity();
    } else {
        form.style.display = "none";
        addBookToLibrary();
        console.log(myLibrary);
        displayBook(myLibrary);
    }
});
//Button to quit the form
quitForm.addEventListener("click", function(e){
    e.preventDefault();
    form.style.display="none";
})
