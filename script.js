let modal = document.querySelector('.modal');
let closeButton = document.querySelector('.close');
let addButton = document.querySelector('.new-book');
let form = document.forms.bookForm;
let addBookButton = document.getElementById('add');
let validateForm = document.querySelector('.validate');
let mainGrid = document.querySelector('.main');
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
    if (!form.checkValidity()){
        validateForm.click();
        return;
    }
    let formData = new FormData(form);
    let book = new Book(formData.get('title'), formData.get('author'), 
    Number(formData.get('pages')), Boolean(Number(formData.get('read'))));
    library.push(book);
    addCard(library.length-1, book);
    form.reset();
    closeModal();
}

function addCard(index, book){
    //card
    let card = document.createElement('div');
    card.setAttribute('data', index);
    card.classList.add('card');

    //title
    let titleRow = createCardRow();
    let bookTitle = createRowElement('h3',book.title);
    titleRow.appendChild(bookTitle);
    card.appendChild(titleRow);

    //author
    let authorRow = newRow('h4', 'Author:', 'p', book.author);
    card.appendChild(authorRow);

    //pages
    let pagesRow = newRow('h4', 'Pages:', 'p', book.pages)
    card.appendChild(pagesRow);

    //checkbox
    let checkbox = createCheckbox(book.isRead);
    card.appendChild(checkbox);

    //delete button
    let deleteButton = document.createElement('button');
    deleteButton.classList.add('delete');
    deleteButton.setAttribute('type', 'button');
    deleteButton.textContent = "Delete";
    card.appendChild(deleteButton);

    mainGrid.appendChild(card);
}

function createCheckbox(isChecked){
    let checkboxDiv = document.createElement('div');
    checkboxDiv.classList.add('read-switch');
    let header = createRowElement('h4', 'Read:');
    checkboxDiv.appendChild(header);
    let checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    if (isChecked){
        checkbox.checked = true;
    }
    checkboxDiv.appendChild(checkbox);
    return checkboxDiv;
}

function newRow(header, headerContent, element, elementContent){
    let row = createCardRow();
    let rowHeader = createRowElement(header, headerContent);
    let rowElement = createRowElement(element, elementContent);
    row.appendChild(rowHeader);
    row.appendChild(rowElement);
    return row;
}

function createRowElement(tagName, content){
    let element = document.createElement(tagName);
    element.textContent = content;
    return element;
}

function createCardRow(){
    let cardRow =document.createElement('div');
    cardRow.classList.add('info-row');
    return cardRow;
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
