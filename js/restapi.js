async function loadCountryAPI() {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json();
    displayCountries(data);
}

const displayCountries = countries => {
    const container = document.getElementById('countries');
    container.innerHTML = countries.map(getCountryHTML).join('');
};

const getCountryHTML = ({ flags, name, population, region, capital }) => `
    <div class="country-div">
        <img src="${flags.png}" alt="Flag of ${name.common}">
        <h2>${name.common}</h2>
        <hr>
        <h4>Population: ${population}</h4>
        <h4>Region: ${region}</h4>
        <h4>Capital: ${capital}</h4>
    </div>
`;

function searchCountry() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    const nodes = document.getElementsByClassName('country-div');

    Array.from(nodes).forEach(node => {
        const title = node.getElementsByTagName('h2')[0].textContent;
        node.style.display = title.toLowerCase().includes(filter) ? "" : "none";
    });
}

function filterByRegion() {
    const select = document.getElementById('regionFilter');
    const filter = select.value;
    const nodes = document.getElementsByClassName('country-div');

    Array.from(nodes).forEach(node => {
        const region = node.querySelector('h4:nth-of-type(2)').textContent.split(': ')[1];
        node.style.display = region.includes(filter) || filter === "" ? "" : "none";
    });
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

window.addEventListener('load', loadCountryAPI);
