
// getting ID
const bookList = document.getElementById('book-list');
const resultCount = document.getElementById('result-count');
const searchField = document.getElementById('search-text');

//searchBooks
const searchBooks = () => {
    const searchText = searchField.value
    //check search filed value
    if (searchText === '') {
        errorMessage('Please input Something');
        return;
    }
    //clear message
    errorMessage('');
    resultCount.innerText = '';
    //show spinner
    toggleSpinner('block');
    //fetch Book
    fetch(`https://openlibrary.org/search.json?q=${searchText}`)
        .then(res => res.json())
        .then(data => displayBooks(data)
        )
}
//show error message
const errorMessage = (getError) => {
    document.getElementById('error-message').innerText = getError;

}

//spinner toggle
const toggleSpinner = displayStyle => {
    const spinner = document.getElementById('spinner').style.display = displayStyle;

}

//display Book
const displayBooks = books => {
    //check books result 
    if (books.numFound === 0) {
        errorMessage(`No results found for  "${searchField.value}"`)
        bookList.textContent = '';
    }
    else {
        //show found books number
        resultCount.innerText = `(20 of ${books.numFound}  )`
        //getting books
        const result = books.docs
        bookList.textContent = '';
        //show found 20 books
        const show20 = result.slice(0, 20);
        show20.forEach((book) => {
            const div = document.createElement('tr');
            div.innerHTML = div.innerHTML = ` <div class="card h-100">
            <img src=" https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg" class="card-img-top header-img  image-fluid" alt="Book Cover">
            <div class="card-body">
              <h5 class="card-title">${book.title}</h5>
              <h6>Author: <span class="text-primary">  ${book.author_name[0]}</span></h6>
              <h6>Publisher:<span class="text-success"> ${book.publish_place}</h6>
              <h6>First Publish Year: <span class="text-muted">${book.first_publish_year}</h6>
            </div>
            <div class="card-footer">
            </div>
          </div>`;
            bookList.appendChild(div);
        });
        toggleSpinner('none');
    }

}





