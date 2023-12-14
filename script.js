const myLibrary = [
  //insert data here
];

// DOM

let newBookBtn = document.getElementById("new-book-button");

newBookBtn.addEventListener("click", function () {
  let newBookForm = document.getElementById("new-book-form");
  newBookForm.style.display = "block";
});

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
function render() {
  let LibraryEl = document.querySelector("#library");
  LibraryEl.innerHTML = "";
  //
  for (let i = 0; i < myLibrary.length; i++) {
    let myBook = myLibrary[i];
    let bookEl = document.createElement("div");
    bookEl.setAttribute("class", "book-wrapper");
    bookEl.innerHTML = `<p>Title: ${myBook.title}</p>
    <p>Author: ${myBook.author}</p>`;
    bookEl.innerHTML += `<p>Pages: ${myBook.pages}</p>`;
    bookEl.innerHTML += `<p>Read: ${myBook.read}</p>`;
    bookEl.innerHTML += `<button id="delete-${i}">Delete</button>`;
    LibraryEl.appendChild(bookEl);

    //delete and update
    let deleteBtn = document.getElementById(`delete-${i}`);
    let updateBtn = document.getElementById(`update-${i}`);
    deleteBtn.addEventListener("click", () => {
      myLibrary.splice(i, 1);
      render();
    });
  }
}
// Define a function called addBooktoLibrary
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

document.querySelector("#new-book-form").addEventListener("submit", (e) => {
  e.preventDefault();
  addBooktoLibrary();
});
