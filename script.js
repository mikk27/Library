const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBooktoLibrary() {
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;

  let pages = document.getElementById("pages").value;

  let read = document.getElementById("read").checked;

  let newBook = new Book(title, author, pages, read);

  console.log(newBook);

  myLibrary.push(newBook);

  render();
}

// DOM
let newBookBtn = document.getElementById("new-book-button");
document.querySelector("#new-book-form").addEventListener("submit", (e) => {
  e.preventDefault();
  addBooktoLibrary();
});

newBookBtn.addEventListener("click", function () {
  let newBookForm = document.getElementById("new-book-form");
  newBookForm.style.display = "block";
});

function render() {
  const libraryEl = document.querySelector("#library");
  libraryEl.innerHTML = "";

  for (let i = 0; i < myLibrary.length; i++) {
    const book = myLibrary[i];
    const bookEl = document.createElement("div");
    bookEl.setAttribute("class", "book-wrapper");

    const titleEl = document.createElement("p");
    titleEl.textContent = `Title: ${book.title}`;
    bookEl.appendChild(titleEl);

    const authorEl = document.createElement("p");
    authorEl.textContent = `Author: ${book.author}`;
    bookEl.appendChild(authorEl);

    const pagesEl = document.createElement("p");
    pagesEl.textContent = `Pages: ${book.pages}`;
    bookEl.appendChild(pagesEl);
    const readEl = document.createElement("p");
    readEl.textContent = `Read: ${book.read}`;
    bookEl.appendChild(readEl);
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
      myLibrary.splice(i, 1);
      render();
    });
    bookEl.appendChild(deleteBtn);

    libraryEl.appendChild(bookEl);
  }

  console.log("Rendering complete");
}
