// const { response } = require("express");

var call = "sna02008";


async function searchCityByInput() {
    
    const response = await fetch("/api/dnr/"+call, {
        method: 'get',
       
    });
    if (response.ok) {
        const data = await response.json()
        console.log(data);
    }
}
    // console.log('ok');
searchCityByInput()

