"use strict"

let myLibrary = []

const tableBody = document.querySelector("#book-table-body")
const bookTitle = document.querySelector("#book_title")
const authorName = document.querySelector("#author")
const pageLength = document.querySelector("#page_length")
const readStatus = document.querySelector("#finished")

function addBook(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

function addBookToLibrary() {
  const newestBook = new addBook(bookTitle.value,
                                authorName.value,
                                pageLength.value,
                                readStatus.checked);

  if (bookTitle.value.length == 0 || authorName.value.length == 0) {
    alert("Please enter both a Title and Author.");
  } else {
    myLibrary.push(newestBook);
    resetForm();
    createLibraryGrid();
  }
}
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}

function createLibraryGrid() {
  removeAllChildNodes(tableBody);

  myLibrary.forEach((book, index) => {
      const row = document.createElement('tr')

      const titleTd = document.createElement('td')
      titleTd.innerText = book.title
      row.append(titleTd);

      const authorTd = document.createElement('td')
      authorTd.innerText = book.author
      row.append(authorTd);

      const pageTd = document.createElement('td')
      pageTd.innerText = book.pages
      row.append(pageTd);

      const readTd = document.createElement('td')
      book.read ? readTd.innerText = "yes" : readTd.innerText = "no";
      row.append(readTd);

      const changeTd = document.createElement('td')
      const changeButton = document.createElement('button')
      changeButton.class = "change-button"
      changeButton.innerText = "mark read/unread"
      changeTd.append(changeButton);
      row.append(changeTd);

      const deleteTd = document.createElement('td')
      const deleteButton = document.createElement('img')
      deleteButton.className = "delete-button"
      deleteButton.src = "images/delete.svg"
      deleteButton.addEventListener("click", () => {
        myLibrary.splice(index, 1);
        createLibraryGrid();
      });
      deleteTd.append(deleteButton);
      row.append(deleteTd);

      const endRow = document.createElement('tr')
      row.append(endRow);

      tableBody.append(row);
    });
  }

  function deleteBook(value) {
    myLibrary.splice(value, 1)
    createLibraryGrid();
  }

function resetForm() {
  bookTitle.value = '';
  authorName.value = '';
  pageLength.value = '';
  readStatus.checked = false;
}

const popup = document.querySelector(".new-book-form");
const trigger = document.querySelector(".book-container");
const closeButton = document.querySelector("#cancel-button");
const submitButton = document.querySelector("#submit-button");

function togglePopup() {
  popup.classList.toggle("show-popup");
}

popup.addEventListener("click", function(event) {
    event.stopPropagation();
  });

trigger.addEventListener("click", togglePopup);
closeButton.addEventListener("click", togglePopup);
submitButton.addEventListener("click", addBookToLibrary);
submitButton.addEventListener("click", togglePopup);
