const loadCountryAPI = async () => {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json();
    displayCountries(data);
};


const displayCountries = countries => {
    const container = document.getElementById('countries');
    container.innerHTML = countries.map(getCountryHTML).join(' ');
};


const getCountryHTML = ({ flags, name, population, region, capital }) => `
    <div class="country-div">
        <img src="${flags.png}">
        <h2>${name.common}</h2>
        <hr>
        <h4>Population: ${population}</h4>
        <h4>Region: ${region}</h4>
        <h4>Capital: ${capital}</h4>
    </div>
`;

loadCountryAPI();
