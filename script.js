const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// Define a function called addBooktoLibrary
function addBooktoLibrary() {
  // Get the value of the 'title' input field
  let title = document.getElementById("title").value;

  // Get the value of the 'author' input field
  let author = document.getElementById("author").value;

  // Get the value of the 'pages' input field
  let pages = document.getElementById("pages").value;

  // Get the checked state of the 'read' checkbox
  let read = document.getElementById("read").checked;

  // Create a new Book object with the retrieved values
  let newBook = new Book(title, author, pages, read);

  // Log the new book object to the console
  console.log(newBook);

  // Add the new book object to the 'myLibrary' array
  myLibrary.push(newBook);

  // Render the updated library
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
  // Get the library element
  const libraryEl = document.querySelector("#library");
  // Clear the contents of the library element
  libraryEl.innerHTML = "";

  // Loop through each book in the myLibrary array
  for (let i = 0; i < myLibrary.length; i++) {
    const book = myLibrary[i];
    // Create a new book element
    const bookEl = document.createElement("div");
    bookEl.setAttribute("class", "book-wrapper");

    // Create a title element and set its text content
    const titleEl = document.createElement("p");
    titleEl.textContent = `Title: ${book.title}`;
    // Append the title element to the book element
    bookEl.appendChild(titleEl);

    // Create an author element and set its text content
    const authorEl = document.createElement("p");
    authorEl.textContent = `Author: ${book.author}`;
    // Append the author element to the book element
    bookEl.appendChild(authorEl);

    // Create a pages element and set its text content
    const pagesEl = document.createElement("p");
    pagesEl.textContent = `Pages: ${book.pages}`;
    // Append the pages element to the book element
    bookEl.appendChild(pagesEl);

    // Create a read element and set its text content
    const readEl = document.createElement("p");
    readEl.textContent = `Read: ${book.read}`;
    // Append the read element to the book element
    bookEl.appendChild(readEl);

    // Create a delete button element and set its text content
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    // Add a click event listener to the delete button
    deleteBtn.addEventListener("click", () => {
      // Remove the book from the myLibrary array at the current index
      myLibrary.splice(i, 1);
      // Render the library again
      render();
    });
    // Append the delete button element to the book element
    bookEl.appendChild(deleteBtn);

    // Append the book element to the library element
    libraryEl.appendChild(bookEl);
  }

  // Log a message indicating that rendering is complete
  console.log("Rendering complete");
}
