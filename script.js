document.addEventListener('DOMContentLoaded', function() {
    fetch('https://raw.githubusercontent.com/stella-iacono/json/refs/heads/main/albums.json')
        .then(response => response.json())  // Parses the response as JSON.
        .then(data => {
            // Gets a reference to the element with the id 'content' in the HTML document.
            const contentDiv = document.getElementById('content');
            // Iterates over each item in the fetched data array.
            data.forEach(item => {
                // Creates a new 'section' element.
                const section = document.createElement('section');
                // Sets the innerHTML of the section with dynamic data from the current item.
                section.innerHTML = `
                    <h1>#${item.ranking}</h2>
                    <h2>${item.title}</h2> 
                    <img src="${item.imageUrl}" alt="${item.altText}" style="width:100%;max-width:300px;">
                    <p><strong>Artist: ${item.artist}</strong></p>
                    <p><strong>Year released: ${item.releaseYear}</strong></p>
                    <p>${item.text}  <a href = "${item.wikiLink}" target = "_blank">Go to Wikipedia page</a></p>
               <!-- Displays text and a 'Read More' link that opens in a new tab -->
                `;
                contentDiv.appendChild(section);
            });
        })
        .catch(error => console.error('Error loading the data:', error)); 
});

