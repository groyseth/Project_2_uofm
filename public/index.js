const { redirect } = require("express/lib/response");

var searchElements = document.querySelectorAll('.searchBtn');
console.log(searchElements);


// console.log(ParkPointBtn);
async function searchCityByInput(event) {
    // console.log(event.target.value);
    try {
        var call = event.target.value
        const response = await fetch("/api/dnr/" + call, {
            method: 'get',

        });
        if (response.ok) {
            const data = await response.json()
            console.log(data);
            
        }
    } catch (err) {
        console.log(err);
    }
}

for (let index = 0; index < searchElements.length; index++) {
    console.log(searchElements[index]);
    searchElements[index].addEventListener("click", searchCityByInput)

}

