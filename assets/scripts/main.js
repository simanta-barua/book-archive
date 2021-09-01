const loadBooks = () => {
    fetch('./assets/search.json')
        .then(res => res.json())
        .then(data => displayBooks(data)
        )
}
loadBooks();

const displayBooks = books => {
    const resultCount = document.getElementById('result-count');
    resultCount.innerText = `${books.numFound}`
    const result = books.docs
    const bookList = document.getElementById('book-list');

    result.forEach(book => {
        const div = document.createElement('tr');
        div.innerHTML = ` <td ><img src="./assets/image/1.jpg" alt="" srcset=""></td>
        <td><a href="">${book.title}</a>
            <li class="list-group text-muted"> ${book.publish_place[0]}</li>
            <li class="list-group text-success mt-3 mb-5"> ${book.author_name}</li>
            <div class="d-flex justify-content-around  mt-5">
                <li class="list-group ">Year : ${book.first_publish_year}</li>
                <li class="list-group">Language : ${book.language}</li>
                <li class="list-group">File</li>
                <li class="list-group">Rating</li>
            </div>
        </td>`;

        bookList.appendChild(div);
        
    });
}