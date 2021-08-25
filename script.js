let library = [];

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
Book.prototype.isRead = function(){
    if(this.read){
        return "Read";
    } else{
        return "Not read";
    }
}



function addBookToLibrary(title, author , pages, read) {
    library.push(new Book(title,author,pages,read)); 
    createCard(library);   
}

function createCard(library) {
    let i = library.length-1;

    const content = document.querySelector("#content");

    let card = document.createElement("div");
    card.classList.add("card");

    let title = document.createElement("p");
    title.textContent= library[i].getName();
    title.classList.add("title");
    card.appendChild(title);
    
    let author = document.createElement("p");
    author.classList.add("author");
    author.textContent="By "+library[i].getAuthor();
    card.appendChild(author);
    
    let pages = document.createElement("p");
    pages.classList.add("pages");
    pages.textContent=library[i].getPages() +" pages";
    card.appendChild(pages);
    
    let read = document.createElement("button");
    read.classList.add("read")
    read.textContent = library[i].isRead();
    card.appendChild(read);
    
    let deleteButton = document.createElement("button");
    deleteButton.classList.add("delete");
    deleteButton.textContent="Delete";
    card.appendChild(deleteButton);

    content.appendChild(card);

    
}
addBookToLibrary("The Wandering Inn" ,"Pirateaba",1000,true);
addBookToLibrary("Punishment and Crime" ,"Dosto",323,false);
