const openForm = document.getElementById("newbook"); //button to open the form to add a book
const form = document.querySelector("form"); //form for adding a book
const addBook = document.getElementById("addBook"); //button of the form which add a new Book
let myLibrary = [];
const leftBar = document.querySelector(".leftbar");

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
    //re-insert all the books on display
    for (let i = 0; i < myLibrary.length; i++) {
        let newDiv = document.createElement("div");
        newDiv.classList.add("book_card");
        newDiv.setAttribute("data-book", i);
        leftBar.appendChild(newDiv);
        let cardTitle = document.createElement("p");
        cardTitle.textContent = myLibrary[i].title;
        newDiv.appendChild(cardTitle);
        let cardAuthor = document.createElement("p");
        cardAuthor.textContent = myLibrary[i].author;
        newDiv.appendChild(cardAuthor);
        let cardPages = document.createElement("p");
        cardPages.textContent = myLibrary[i].pages;
        newDiv.appendChild(cardPages);
        let paragraph=document.createElement("p");
        paragraph.textContent="pages"
        newDiv.appendChild(paragraph);
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
