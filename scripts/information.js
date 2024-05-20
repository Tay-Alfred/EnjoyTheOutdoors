// function that can "fetch" the sunrise/sunset times 
async function getSunsetForMountain(lat, lng){ 
    let response = await fetch( 
    `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=today`); 
    let data = await response.json(); 
    return data; 
    }
    