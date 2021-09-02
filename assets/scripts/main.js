
// getting ID
const bookList = document.getElementById('book-list');
const resultCount = document.getElementById('result-count');
const searchField = document.getElementById('search-text');

//searchBooks
const searchBooks = () => {
    const searchText = searchField.value
    //check search filed value
    if (searchText === '') {
        errorMessage('cannot be empty');
        return;
    }
    //clear message
    errorMessage('');
    resultCount.innerText = '';
    //show spinner
    toggleSpinner('block');
    //fetch Book
    fetch(`http://openlibrary.org/search.json?q=${searchText}`)
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
        errorMessage('No Book Found')
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
            div.innerHTML = ` <td ><img src=" https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" alt="" srcset=""></td>
        <td><a href="">${book.title}</a>
            <li class="list-group text-muted"></li>
            <li class="list-group text-success mt-3 mb-5"> ${book.author_name}</li>
            <div class="d-flex justify-content-around text-muted mt-5">
                <li class="list-group ">Year : ${book.first_publish_year}</li>
                <li class="list-group">Language : ${book.language}</li>
                <li class="list-group">File</li>
                <li class="list-group">Rating</li>
            </div>
        </td>`;

            bookList.appendChild(div);
        });
    }
    toggleSpinner('none')
}