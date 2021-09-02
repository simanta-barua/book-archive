const searchBooks = () => {
    toggleSpinner('block')
    const searchField = document.getElementById('search-text');
    const searchText = searchField.value
    fetch(`http://openlibrary.org/search.json?q=${searchText}`)
        .then(res => res.json())
        .then(data => displayBooks(data)
        )

}


//spinner toggle
const toggleSpinner = displayStyle =>{
    const spinner = document.getElementById('spinner').style.display = displayStyle;
    
}

const displayBooks = books => {
    
    const resultCount = document.getElementById('result-count');
    resultCount.innerText = `${books.numFound}`
    const result = books.docs
    const bookList = document.getElementById('book-list');
    console.log(books);
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
    toggleSpinner('none')
}