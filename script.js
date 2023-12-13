const myLibrary = [
  //insert data here
];

// DOM

let newBookBtn = document.getElementById("new-book-button");

newBookBtn.addEventListener("click", function () {
  let newBookForm = document.getElementById("new-book-form");
  newBookForm.style.display = "block";
});

/**
 * Create a Book object with the given title, author, pages, and read status.
 * @param {string} title - The title of the book.
 * @param {string} author - The author of the book.
 * @param {number} pages - The number of pages in the book.
 * @param {boolean} read - The read status of the book.
 * @returns {object} - The created Book object.
 */
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// Define a function called addBooktoLibrary
function addBooktoLibrary() {
  // Get the value of the input element with the id "title" and assign it to the variable title
  let title = document.getElementById("title").value;
  // Get the value of the input element with the id "author" and assign it to the variable author
  let author = document.getElementById("author").value;
  // Get the value of the input element with the id "pages" and assign it to the variable pages
  let pages = document.getElementById("pages").value;
  // Get the value of the checkbox element with the id "read" and check if it is checked or not,
  // assign the result to the variable read
  let read = document.getElementById("read").checked;
  // Create a new Book object with the values of title, author, pages, and read,
  // and assign it to the variable newBook
  let newBook = new Book(title, author, pages, read);
  // Log the newBook object to the console
  console.log(newBook);
}
document.querySelector("#new-book-form").addEventListener("submit", (e) => {
  e.preventDefault();
  addBooktoLibrary();
});
