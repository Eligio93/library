
let myLibrary = [];
let openForm=document.getElementById("open_form");
let form=document.getElementById("form");
let quitForm=document.getElementById("quitForm");
let addBook=document.getElementById("addBook");
let leftBar=document.querySelector(".leftbar");
let rightBar=document.querySelector(".rightbar");
let svgBook='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>book-open-blank-variant</title><path d="M21,5C19.89,4.65 18.67,4.5 17.5,4.5C15.55,4.5 13.45,4.9 12,6C10.55,4.9 8.45,4.5 6.5,4.5C4.55,4.5 2.45,4.9 1,6V20.65C1,20.9 1.25,21.15 1.5,21.15C1.6,21.15 1.65,21.1 1.75,21.1C3.1,20.45 5.05,20 6.5,20C8.45,20 10.55,20.4 12,21.5C13.35,20.65 15.8,20 17.5,20C19.15,20 20.85,20.3 22.25,21.05C22.35,21.1 22.4,21.1 22.5,21.1C22.75,21.1 23,20.85 23,20.6V6C22.4,5.55 21.75,5.25 21,5M21,18.5C19.9,18.15 18.7,18 17.5,18C15.8,18 13.35,18.65 12,19.5V8C13.35,7.15 15.8,6.5 17.5,6.5C18.7,6.5 19.9,6.65 21,7V18.5Z"></path></svg>';

function Book(title, author, pages, read) {
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read 
}

Book.prototype.changeStatus= function(readStatus){
    if(readStatus=="Yes"){
        this.read="No";
    }else{
        this.read="Yes";
    }
    displayBookCard(myLibrary);
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

function displayBookCard(myLibrary){
    //Reset the display with the new Library
   leftBar.querySelectorAll("div").forEach((div) => {
        div.remove();
    });
    rightBar.querySelectorAll("div").forEach((div) => {
        div.remove();
    })
   
    for(let i=0; i< myLibrary.length;i++){
        //create the card
        let bookCard=document.createElement("div");
        bookCard.classList.add("book_card");
        bookCard.setAttribute("data-book",i);
     
        //Add SVG picture
        bookCard.innerHTML=svgBook;
        //Add Title Card
        let cardTitle=document.createElement("p");
        cardTitle.classList.add("card_title");
        cardTitle.textContent=myLibrary[i].title;
        bookCard.appendChild(cardTitle);
        //Add author card
        let cardAuthor=document.createElement("p");
        cardAuthor.classList.add("card_author");
        cardAuthor.textContent=myLibrary[i].author;
        bookCard.appendChild(cardAuthor);
        //Add Pages Card
        let cardPages=document.createElement("p");
        cardPages.classList.add("card_pages");
        cardPages.textContent=myLibrary[i].pages;
        bookCard.appendChild(cardPages);
        //Add the 2 paragraph
        let p1=document.createElement("p");
        p1.textContent="pages";
        bookCard.appendChild(p1);
        let p2=document.createElement("p");
        p2.textContent="Read?";
        bookCard.appendChild(p2);
        //Add the toggle Switch
        let toggleSwitch = document.createElement("label");
        toggleSwitch.classList.add("switch");
        let inputSwitch = document.createElement("input");
        inputSwitch.type = "checkbox";
        inputSwitch.classList.add("toggle_switch");
        inputSwitch.setAttribute("data-switch",i);
        if (myLibrary[i].read === "No") {
          inputSwitch.checked = true;
        }

        let switchSlider = document.createElement("span");
        switchSlider.classList.add("slider");
        let switchTextNo = document.createElement("p");
        switchTextNo.textContent = "No";
        let switchTextYes = document.createElement("p");
        switchTextYes.textContent = "Yes";
        
        switchSlider.appendChild(switchTextNo);
        switchSlider.appendChild(switchTextYes);
        
        toggleSwitch.appendChild(inputSwitch);
        toggleSwitch.appendChild(switchSlider);
        
        bookCard.appendChild(toggleSwitch);
        
        
        //Add delete Button on Card
        let deleteButton=document.createElement("button");
        deleteButton.classList.add("delete_book");
        deleteButton.textContent="X"
        bookCard.appendChild(deleteButton);
        // Condition to put the book in the right or left bar
        if(myLibrary[i].read=="Yes"){
            leftBar.appendChild(bookCard);
        }else{

            rightBar.appendChild(bookCard);
            

        }

    }
console.log(myLibrary)
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
    displayBookCard(myLibrary);
    

    

})
//implement functionality to delete buttons
leftBar.addEventListener("click",function(event){
    let deleteButton=event.target.closest(".delete_book");
    let parentElement=deleteButton.parentNode;
    let index= parentElement.getAttribute("data-book");
    parentElement.remove();
    myLibrary.splice(index,1);
    displayBookCard(myLibrary);
    
})
rightBar.addEventListener("click",function(event){
    let deleteButton=event.target.closest(".delete_book");
    let parentElement=deleteButton.parentNode;
    let index= parentElement.getAttribute("data-book");
    parentElement.remove();
    myLibrary.splice(index,1);
    displayBookCard(myLibrary);
    
})
//Function that switch the read status of the book
window.addEventListener("click",function(event){
    let togglebtn=event.target.closest(".toggle_switch");
    let index=togglebtn.getAttribute("data-switch");
    let readStatus=myLibrary[index].read;
    myLibrary[index].changeStatus(readStatus);
    
})




