// DOM

//added a function that shows "modal" dialog on-click. This is where we insert the info about the book.
// Works for the button: "NEW BOOK"
const showBtn = document.querySelector("#new-book-button");
showBtn.addEventListener("click", () => {
  dialog.showModal();
});

//added a function that inserts a new book to our array in the modal window. After, we also close the dialog window with submitting..
// Works for the button: "ADD BOOK"
const newBookBtn = document.querySelector("#newbookBtn");
newBookBtn.addEventListener("click", (e) => {
  e.preventDefault();
  addBooktoLibrary();
  dialog.close();
});

//Select the div where all the books will eventually be displayed in.
const library = document.querySelector("#library");

// DOM ENDS //

//initialize array: MyLibrary
const myLibrary = [
  //your books "end up here"
];

//Define which details are required for the book.
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

//Define how adding a book to the library works
function addBooktoLibrary() {
  //Catch the values from our form and assign them to various variables.
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let read = document.getElementById("read").checked; //the checkbox uses a boolean value (true/false)
  let newBook = new Book(title, author, pages, read); //create a new object based on the Book class.
  myLibrary.push(newBook); //add the new book to the library
  render();
  console.log(newBook); //for testing purposes
}

// This function renders the library visually by creating DOM elements for each book in the "myLibrary" array.
function render() {
  const library = document.querySelector("#library"); // Get the library element from the DOM
  library.innerHTML = ""; // Clear the library element before rendering the books

  // Iterate through each book in the myLibrary array
  for (let i = 0; i < myLibrary.length; i++) {
    const book = myLibrary[i]; // Get the current book in the loops

    // Create a new div element to hold all the book information
    const bookElement = document.createElement("div");
    bookElement.setAttribute("class", "book-wrapper"); // Set the class of the div to "book-wrapper" for styling

    // Create a paragraph element for the book title and set its text content
    const titleElement = document.createElement("p");
    titleElement.textContent = `Title: ${book.title}`;
    bookElement.appendChild(titleElement); // Append the title element to the book div

    // Create a paragraph element for the book author and set its text content
    const authorElement = document.createElement("p");
    authorElement.textContent = `Author: ${book.author}`;
    bookElement.appendChild(authorElement); // Append the author element to the book div

    // Create a paragraph element for the book pages and set its text content
    const pagesElement = document.createElement("p");
    pagesElement.textContent = `Pages: ${book.pages}`;
    bookElement.appendChild(pagesElement); // Append the pages element to the book div

    // Create a paragraph element for the book read status and set its text content
    const readElement = document.createElement("p");
    readElement.textContent = `Read: ${book.read}`;
    bookElement.appendChild(readElement); // Append the read element to the book div

    // Create a delete button for the book
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    // Add an event listener to the delete button to remove the book from the library and re-render
    deleteBtn.addEventListener("click", () => {
      myLibrary.splice(i, 1); // Remove the book from the myLibrary array
      render(); // Re-render the library
    });

    bookElement.appendChild(deleteBtn); // Append the delete button to the book div
    library.appendChild(bookElement); // Append the book div to the library element
  }

  console.log("Render complete!"); // For testing purposes
}
