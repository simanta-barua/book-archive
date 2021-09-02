
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
        //show found books
        resultCount.innerText = `(${books.numFound})`
        //getting books
        const result = books.docs
        bookList.textContent = '';
        result.forEach((book) => {
            const div = document.createElement('tr');
            div.innerHTML = div.innerHTML = ` <div class="card h-100">
            <img src=" https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top header-img  image-fluid" alt="Book Cover">
            <div class="card-body">
              <h5 class="card-title">${book.title}</h5>
              <p>Author: ${book.author_name}</p>
            </div>
            <div class="card-footer">
              <small class="text-muted">Publish Year: ${book.first_publish_year}</small>
            </div>
          </div>`;
            bookList.appendChild(div);
        });
       
        

    }
    toggleSpinner('none')
}