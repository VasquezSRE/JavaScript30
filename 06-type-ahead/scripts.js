const endpoint = 'https://randomuser.me/api/?results=100';
const people = [];

fetch(endpoint)
    .then(blob => blob.json())
    .then(data => people.push(...data.results));

function findPerson(wordToMatch, people) {
    return people.filter(person => {
        const regex = new RegExp(wordToMatch, 'gi');
        return person.name.first.match(regex) || person.name.last.match(regex)
    });
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayMatches() {
    const matchArray = findPerson(this.value, people);
    suggestions.innerHTML = matchArray.map(person => {
        const firstName = person.name.first;
        const lastName = person.name.first;
        const photo = person.picture.thumbnail;
        const registered = person.registered.date;
        const email = person.email;
        return `
            <div class="sub-card">
            <figure class="fir-image-figure">
            
              <a class="fir-imageover" rel="noopener" target="_blank" href="#!">
                <img class="fir-author-image fir-clickcircle" src="${photo}" alt="${firstName} ${lastName}">
                <div class="fir-imageover-color"></div>
                <img class="fir-imageover-image fir-clickcircle" src="https://fir-rollup.firebaseapp.com/twitter-logo.png" />
              </a>
            
              <figcaption>
                <div class="fig-author-figure-title">${firstName} ${lastName}</div>
                <div class="fig-author-figure-title">${email}</div>
                <div class="fig-author-figure-title">${registered}; 5m read</div>
              </figcaption>
            </figure>
            </div>
            `;
    }).join('');

}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);