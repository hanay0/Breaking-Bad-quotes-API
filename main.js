const generateQuote = document.querySelector('.generate');
const quotesContainer = document.querySelector('.quotes-container');
generateQuote.addEventListener('click', loadQuote);

function loadQuote(e) {
    e.preventDefault();

    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://breaking-bad-quotes.herokuapp.com/v1/quotes', true);

    // on load function
    xhr.onload = function() {
        if(this.status === 200) {
            const response = JSON.parse(this.responseText);
            console.log(response);

            let output = '';
            
            response.forEach(singleQuote => {
                output += 
                `
                    <div class="quote">
                        <p>${singleQuote.quote}</p>
                        <span>By: ${singleQuote.author}</span>
                    </div>
                `
            });

            quotesContainer.innerHTML = output;
        }
    }

    xhr.send();
}