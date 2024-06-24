const container = document.querySelector(".container");
const bookForm = document.querySelector(".book-form");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const cardBox = document.querySelector(".card-box")

const myLibrary = [];

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function addBookToLibrary() {
    myLibrary.push(new Book(title.value, author.value, pages.value));
    console.log(myLibrary);
    cardBox.innerHTML = ``;
}


function addBook() {
    for(let i = 0; i < myLibrary.length; i++) {

         let card = document.createElement("div");
        card.className = "card";
        cardBox.appendChild(card);
        let bookTitle = document.createElement("p");
        bookTitle.textContent = `Title : ${myLibrary[i].title}`;
        let bookAuthor = document.createElement("p");
        bookAuthor.textContent = `Author : ${myLibrary[i].author}`;
        let bookPages = document.createElement("p");
        bookPages.textContent = `Pages : ${myLibrary[i].pages}`;
        let readBtn = document.createElement("button");
        readBtn.textContent = `read`;
        let removeBtn = document.createElement("button");
        removeBtn.textContent = `Remove`;
        card.append(bookTitle, bookAuthor, bookPages, readBtn, removeBtn);


        removeBtn.addEventListener("click", ()=> {
            cardBox.removeChild(card);
            myLibrary.splice(this.index, 1);
        })
    }
}





// function displayBook() {
//     let card = document.createElement("div");
//     card.className = "card";
//     container.appendChild(card);
//     let name = document.createElement("p");
//     card.appendChild(name);
//     name.innerText = `Title : ${title.value} Author : ${author.value} Pages : ${pages.value}`;
//     console.log(myLibrary);
// }



const addBtn = document.querySelector(".addBtn");
addBtn.addEventListener("click", ()=> {
    bookForm.style.display = "inline";
    addBtn.style.display = "none";

})

const addBtn2 = document.querySelector(".addBtn2");
addBtn2.addEventListener("click", ()=> {
    bookForm.style.display = "none";
    addBtn.style.display = "inline";


//     const book1 = new Book(title.value, author.value, pages.value);
// console.log(book1);
// console.log(title.value, author.value, pages.value);

addBookToLibrary();
addBook();
})

