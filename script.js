let modal = document.querySelector('.modal');
let closeButton = document.querySelector('.close');
let addButton = document.querySelector('.new-book');
let form = document.forms.bookForm;
let addBookButton = document.getElementById('add');

let library = [];


closeButton.addEventListener('click', closeModal);
addButton.addEventListener('click', openModal);
addBookButton.addEventListener('click', addBookToLibrary);

function closeModal(){
    modal.style.display = "none";
}

function openModal(){
    modal.style.display = "flex";
}

function addBookToLibrary(){
    let formData = new FormData(form);
    library.push(new Book(formData.get('title'), formData.get('author'), 
    Number(formData.get('pages')), Boolean(Number(formData.get('read')))));
    form.reset();
    closeModal();
}


function Book(title, author, pages, isRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

Book.prototype.info = function(){
    return `${this.title} by ${this.author}, ${this.pages}, ${this.isRead? 'read' : 'not read yet'}`;
}
