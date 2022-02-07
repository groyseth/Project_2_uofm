// var fav = document.getElementById('listOfFav')

var favElements = document.getElementById('favbtn');

// var searchElements = document.querySelectorAll('.searchBtn');
// console.log(searchElements);


// console.log(ParkPointBtn);
const commentFormHandler = async function(event) {
    event.preventDefault();
  
    // const postId = document.querySelector('#postId');
    // const body = document.querySelector('#commentBody');
    // var favElements = document.getElementById('favbtn')
  
    if (body) {
      await fetch('/api/favorite/', {
        method: 'POST',
        body: JSON.stringify({
          // user_id,
            sna_id
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
  
      // document.location.reload();
      document.location.replace('/favorite');
    }
  };
  
  document
    .querySelector('#favbtn')
    .addEventListener('submit', commentFormHandler);

//     renderHistory()
// function renderHistory() {
// fav.innerHTML = ""
//     // for (let i = 0; i < cityHistory.length; i++) {
       
//         var list = document.createElement("li");
//         list.innerHTML = favElements
        
//         list.addEventListener("click", function (e) {
//             console.log(e.target.textContent)
//             // favElements(e.target.textContent)
//         })
//         console.log(list);
        
//         fav.appendChild(list);
//     // }
    
// }