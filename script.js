let library = [];
const modal = document.querySelector("#modal");
const addButton = document.querySelector("#button");
const submitBook = document.querySelector("#submitButton");
const titleInput = document.querySelector("#titleInput");
const authorInput = document.querySelector("#authorInput");
const pagesInput = document.querySelector("#pagesInput");
const readStatus = document.getElementsByName('isRead');



function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

}

Book.prototype.getName = function () {
    return this.title;
}
Book.prototype.getAuthor = function () {
    return this.author;

}
Book.prototype.getPages = function () {
    return this.pages;

}
Book.prototype.isRead = function () {
    if (this.read) {
        return "Read";
    } else {
        return "Not read";
    }
}



function addBookToLibrary(title, author, pages, read) {
    library.push(new Book(title, author, pages, read));
    createCard(library);
}

function createCard(library) {
    let i = library.length - 1;

    const content = document.querySelector("#content");

    let card = document.createElement("div");
    card.classList.add("card");

    let title = document.createElement("p");
    title.textContent = library[i].getName();
    title.classList.add("title");
    card.appendChild(title);

    let author = document.createElement("p");
    author.classList.add("author");
    author.textContent = "By " + library[i].getAuthor();
    card.appendChild(author);

    let pages = document.createElement("p");
    pages.classList.add("pages");
    pages.textContent = library[i].getPages() + " pages";
    card.appendChild(pages);

    let read = document.createElement("button");
    read.classList.add("read")
    read.textContent = library[i].isRead();
    card.appendChild(read);

    let deleteButton = document.createElement("button");
    deleteButton.classList.add("delete");
    deleteButton.textContent = "Delete";
    card.appendChild(deleteButton);

    content.appendChild(card);


}

addButton.addEventListener("click", function () {
    modal.style.display = "block";
})



window.addEventListener("click", function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
})
submitBook.addEventListener("click", function () {
    let readValue;
    for (i = 0; i < readStatus.length; i++) {
        if (readStatus[i].checked)
            readValue = readStatus[i].value;
    }
    console.log(readValue);

})