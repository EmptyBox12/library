let library = [];
let storageArray = [];

const modal = document.querySelector("#modal");
const addButton = document.querySelector("#button");
const submitBook = document.querySelector("#submitButton");
const titleInput = document.querySelector("#titleInput");
const authorInput = document.querySelector("#authorInput");
const pagesInput = document.querySelector("#pagesInput");
const readStatus = document.getElementsByName('isRead');
const content = document.querySelector("#content");
window.localStorage;
let storedLibrary = JSON.parse(localStorage.getItem("library") || "[]");
let i;





class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
     
    }

    getName() {
        return this.title;
    }
    getAuthor() {
        return this.author;
    }
    getPages() {
        return this.pages;

    }
    isRead(){
        if (this.read=="true") {
            return "Read";
            
        } else {
            
            return "Not Read";
        }
    }
    setRead(read) {
        this.read = read;
    }
}
if (storedLibrary.length > 0) {
    for (let i = 0; i < storedLibrary.length; i++) {
        for (const key in storedLibrary[i]) {
            storageArray.push(storedLibrary[i][key]);

        }
        library.push(new Book(storageArray[0], storageArray[1], storageArray[2], storageArray[3]));
     
        storageArray = [];

    }
}

if (library.length > 0) {
    let i = library.length - 1;
    while (i >= 0) {
        createCard(library, true);

        i--;
    }
    deleteButton();
    changeReadStatus();
    localStorage.setItem("library", JSON.stringify(library));


}






function addBookToLibrary(title, author, pages, read) {
    library.push(new Book(title, author, pages, read));
    createCard(library, false);
    deleteButton();
    changeReadStatus();
    localStorage.setItem("library", JSON.stringify(library));


}

function createCard(library, storage) {

    if (storage) {
        if (i === undefined) {
            i = 0;
        }
    } else {
        i = library.length - 1;
    }



    let card = document.createElement("div");
    card.setAttribute("data-id", i);
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
    read.setAttribute("data-id", i);
    card.appendChild(read);

    let deleteButton = document.createElement("button");
    deleteButton.classList.add("delete");
    deleteButton.textContent = "Delete";
    deleteButton.setAttribute("data-id", i);
    card.appendChild(deleteButton);

    content.appendChild(card);
    if (storage) {
        i++;
    }

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
    let title = titleInput.value;
    let author = authorInput.value;
    let pages = pagesInput.value;
    let readValue="";
    for (i = 0; i < readStatus.length; i++) {
        if (readStatus[i].checked)
            readValue = readStatus[i].value;
    }
    

    
    addBookToLibrary(title, author, pages, readValue);
    modal.style.display = "none";
})
function deleteButton() {
    let deleteButton = document.querySelectorAll(".delete");
    deleteButton.forEach(element => {
        element.addEventListener("click", () => {
            let id = element.dataset.id;
            let removedDiv = document.querySelector(`[data-id="${id}"]`);
            content.removeChild(removedDiv);
            library.splice(id, 1);
            localStorage.setItem("library", JSON.stringify(library));

        });


    });

}
function changeReadStatus() {
    let readButton = document.querySelectorAll(".read");
    readButton.forEach(element => {
        element.addEventListener("click", () => {
            let id = element.dataset.id;
            if (element.textContent == "Read") {
                element.textContent = "Not Read";
                library[id].setRead(false);
                localStorage.setItem("library", JSON.stringify(library));

            } else {
                element.textContent = "Read";
                library[id].setRead(true);    
                localStorage.setItem("library", JSON.stringify(library));

            }

        });


    });

}

