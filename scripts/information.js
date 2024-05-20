// // function that can "fetch" the sunrise/sunset times 
// async function getSunsetForMountain(lat, lng){ 
//     let response = await fetch( 
//     `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=today`); 
//     let data = await response.json(); 
//     return data; 
//     }
    
    const mountainDropdown = document.getElementById('mountainDropdown');
    mountainsArray.forEach((mountain, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = mountain.name;
        mountainDropdown.appendChild(option);
    });

    // Function to show mountain information
    function showMountainInfo() {
        const selectedIndex = mountainDropdown.value;
        if (selectedIndex === "") {
            document.getElementById('mountainInfo').style.display = 'block';
            return;
        }
        const mountain = mountainsArray[selectedIndex];
        document.getElementById('mountainName').textContent = mountain.name;
        document.getElementById('mountainDesc').textContent = mountain.desc;
        document.getElementById('mountainElevation').textContent = `Elevation: ${mountain.elevation} feet`;
        document.getElementById('mountainImg').src = mountain.img;
        document.getElementById('mountainImg').alt = mountain.name;
        document.getElementById('mountainInfo').style.display = 'block';
    }