var searchElements = document.querySelectorAll('.searchBtn');
console.log(searchElements);


// console.log(ParkPointBtn);
async function searchCityByInput(event) {
    // console.log(event.target.value);
    var call = event.target.value
    const response = await fetch("/api/dnr/"+call, {
        method: 'get',
       
    });
    if (response.ok) {
        const data = await response.json()
        console.log(data);
    }
}

for (let index = 0; index < searchElements.length; index++) {
    console.log(searchElements[index]);
    searchElements[index].addEventListener("click", searchCityByInput)
}

