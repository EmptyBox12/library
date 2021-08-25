let library = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

}

Book.prototype.getName = function () {
    return this.name;
}
Book.prototype.getAuthor = function () {
    return this.author;

}
Book.prototype.getPages = function () {
    return this.pages;

}
Book.prototype.isRead = function(){
    if(read){
        return true;
    } else{
        return false;
    }
}

function addBookToLibrary(title, author , pages, read) {
    library.push(new Book(title,author,pages,read));    
}

addBookToLibrary("trst", "tesst", 212, "read" );
addBookToLibrary("trsast", "aesst", 12, "raead" );

console.log(library);