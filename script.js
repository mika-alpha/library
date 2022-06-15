let library = [];
function Book(title, author, pages, isRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

Book.prototype.info = function(){
    return `${this.title} by ${this.author}, ${this.pages}, ${this.isRead? 'read' : 'not read yet'}`;
}

function addBook(book){
    library.push(book)
}