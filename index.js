"use strict"

let myLibrary = []

const $tableBody = document.querySelector("#book-table-body")
let bookTitle = document.querySelector("#book_title")
let authorName = document.querySelector("#author")
let pageLength = document.querySelector("#page_length")
let readStatus = document.querySelector("#finished")

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

  myLibrary.push(newestBook);
  resetForm();
  createLibraryGrid();
}

function createLibraryGrid() {
  $tableBody.innerHTML = "";

  myLibrary.forEach((book) => {
      const htmlBook = `
        <tr>
          <td>${book.title}</td>
          <td>${book.author}</td>
          <td>${book.pages}</td>
          <td>${book.read}</td>
        </tr>
        `;
      $tableBody.insertAdjacentHTML("beforeend", htmlBook);
    });
  }

function resetForm() {
  bookTitle.value = '';
  authorName.value = '';
  pageLength.value = '';
  readStatus.checked = false;
}

const popup = document.querySelector(".new-book-form");
const trigger = document.querySelector(".book-container");
const closeButton = document.querySelector(".cancel-button");
const submitButton = document.querySelector(".submit-button");

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
