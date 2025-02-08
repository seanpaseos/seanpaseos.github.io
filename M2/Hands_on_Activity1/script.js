const jokeElement = document.getElementById('joke');
const button = document.getElementById('newJokeBtn');
const loadingElement = document.getElementById('loading');
const errorElement = document.getElementById('error');

function fetchJoke() {
    
    loadingElement.style.display = 'block';
    jokeElement.textContent = '';
    errorElement.style.display = 'none';

    fetch('https://v2.jokeapi.dev/joke/Any?type=single')
        .then(response => response.json())
        .then(data => {
            loadingElement.style.display = 'none'; 
            if (data.error) {
                throw new Error('Error fetching joke');
            }
            
            jokeElement.textContent = data.joke || 'No joke found.';
        })
        .catch(error => {
            loadingElement.style.display = 'none'; 
            errorElement.style.display = 'block';
            errorElement.textContent = 'Failed to load joke. Please try again later.';
        });
}

button.addEventListener('click', fetchJoke);

fetchJoke();
