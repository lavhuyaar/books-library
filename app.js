let bookForm = document.querySelector(".book-form");
let title = document.querySelector("#title");
let author = document.querySelector("#author");
let pages = document.querySelector("#pages");
let cardBox = document.querySelector(".card-box");
let heading = document.querySelector(".heading");
let isRead = document.querySelector("#isRead");

//"Add Book" Button
let addBtn = document.querySelector(".addBtn");
addBtn.addEventListener("click", () => {
  title.value = ``;
  author.value = ``;
  pages.value = ``;
  bookForm.style.display = "inline";
  addBtn.style.display = "none";
  cardBox.style.display = "none";
  heading.style.display = "none";
});

//Form button
let addBtn2 = document.querySelector(".addBtn2");
addBtn2.addEventListener("click", () => {
  if (title.value === `` || author.value === `` || pages.value === ``) {
    alert(`Please fill the details to add book.`);
  } else {
    bookForm.style.display = "none";
    addBtn.style.display = "inline";
    cardBox.style.display = "grid";
    addBookToLibrary();
    addBook();
  }
});

//myLibrary Array
let myLibrary = [];

//Class
class Book {
  constructor(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
  }
}

//Adds book to myLibrary Array
function addBookToLibrary() {
  myLibrary.push(
    new Book(title.value, author.value, pages.value, isRead.value)
  );
  cardBox.innerHTML = ``;
}

//Creates the card
function addBook() {
  for (let i = 0; i < myLibrary.length; i++) {
    let indexNum = i;
    let card = document.createElement("div");
    card.className = "card";
    cardBox.appendChild(card);
    let bookTitle = document.createElement("p");
    bookTitle.textContent = `Title : ${myLibrary[i].title}`;
    let bookAuthor = document.createElement("p");
    bookAuthor.textContent = `Author : ${myLibrary[i].author}`;
    let bookPages = document.createElement("p");
    bookPages.textContent = `Pages : ${myLibrary[i].pages}`;

    //Read-Not read Button
    let readBtn = document.createElement("button");
    if (myLibrary[i].isRead === "true") {
      readBtn.innerText = "Read";
    } else if (myLibrary[i].isRead === "false") {
      readBtn.innerText = "Not read";
    }
    readBtn.className = "readBtn";
    readBtn.addEventListener("click", () => {
      if (readBtn.innerText === "Read") {
        myLibrary[indexNum].isRead = "false";
        readBtn.innerText = "Not read";
      } else if (readBtn.innerText === "Not read") {
        myLibrary[indexNum].isRead = "true";
        readBtn.innerText = "Read";
      }
    });

    //Remove Button
    let removeBtn = document.createElement("button");
    removeBtn.className = "removeBtn";
    removeBtn.textContent = `Remove book`;
    removeBtn.addEventListener("click", () => {
      myLibrary.splice(indexNum, 1);
      cardBox.removeChild(card);
    });

    card.append(bookTitle, bookAuthor, bookPages, readBtn, removeBtn);
  }
}
