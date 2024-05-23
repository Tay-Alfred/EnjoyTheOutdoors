
const stateSelect = document.getElementById('stateSelect');
const stateResultsDiv = document.getElementById('stateResults');
const parkTypeSelect = document.getElementById('parkTypeSelect');
const typeResultsDiv = document.getElementById('typeResults');

// Populate dropdown with unique states/territories
const states = nationalParksArray.reduce((acc, park) => {
    if (!acc.includes(park.State)) {
        acc.push(park.State);
    }
    return acc;
}, []);

states.sort().forEach(state => {
    const option = document.createElement('option');
    option.value = state;
    option.textContent = state;
    stateSelect.appendChild(option);
});

// Populate park type dropdown
parkTypesArray.sort().forEach(type => {
    const option = document.createElement('option');
    option.value = type;
    option.textContent = type;
    parkTypeSelect.appendChild(option);
});

function searchParksByState() {
    const selectedState = stateSelect.value;
    const filteredParks = nationalParksArray.filter(park => park.State === selectedState);
    
    if (filteredParks.length === 0) {
        stateResultsDiv.textContent = 'No parks found for the selected state/territory.';
    } else {
        stateResultsDiv.innerHTML = '<h5>Search Results: </h5>';
        filteredParks.forEach(park => {
            let parkInfo = `<p><strong>${park.LocationName}</strong></p>`;
            parkInfo += `<p>Location: ${park.City}, ${park.State}</p>`;
            if (park.Address && park.Address !== "0") {
                parkInfo += `<p>Address: ${park.Address}</p>`;
            }
            if (park.Phone && park.Phone !== "0") {
                parkInfo += `<p>Phone: ${park.Phone}</p>`;
            }
            parkInfo += `<p>Latitude: ${park.Latitude}, Longitude: ${park.Longitude}</p>`;
            parkInfo += '<hr>';
            stateResultsDiv.innerHTML += parkInfo;
        });
    }
}
function searchParksByType() {
    const selectedType = parkTypeSelect.value;
    const filteredParks = nationalParksArray.filter(park => park.LocationName.includes(selectedType));
    
    if (filteredParks.length === 0) {
        typeResultsDiv.textContent = 'No parks found for the selected type.';
    } else {
        typeResultsDiv.innerHTML = '<h5>Search Results: </h5>';
        filteredParks.forEach(park => {
            let parkInfo = `<p><strong>${park.LocationName}</strong></p>`;
            parkInfo += `<p>Location: ${park.City}, ${park.State}</p>`;
            if (park.Address && park.Address !== "0") {
                parkInfo += `<p>Address: ${park.Address}</p>`;
            }
            if (park.Phone && park.Phone !== "0") {
                parkInfo += `<p>Phone: ${park.Phone}</p>`;
            }
            parkInfo += `<p>Latitude: ${park.Latitude}, Longitude: ${park.Longitude}</p>`;
            parkInfo += '<hr>';
            typeResultsDiv.innerHTML += parkInfo;
        });
    }
}

document.querySelectorAll('input[name="searchType"]').forEach(radio => {
    radio.addEventListener('change', () => {
        if (radio.value === 'state') {
            document.getElementById('stateSearch').style.display = 'block';
            document.getElementById('typeSearch').style.display = 'none';
        } else if (radio.value === 'type') {
            document.getElementById('stateSearch').style.display = 'none';
            document.getElementById('typeSearch').style.display = 'block';
        }
    });
});