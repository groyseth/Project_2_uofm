



// const loginFormHandler = async(event) => {
//     event.preventDefault();
//     console.log('hey')
  
//     const email = document.querySelector('#email-input-login');
//     const password = document.querySelector('#password-input-login');
//   console.log(email);
//   console.log(password);

//     // if (email && password) {
//       const response = await fetch('/api/login/login', {
//         method: 'POST',
//         body: JSON.stringify({ 
//           email : email.value,
//           password: password.value 
//         }),
//         headers: { 'Content-Type': 'application/json' },
//       });
  
//       if (response.ok) {
//         console.log(response);
//         // var aTags = document.querySelectorAll('.disabled-link');
//         // aTags.forEach(function(anchor){
//         //   anchor.classList.remove('disabled-link');
//         // })
//         // var hidden = document.querySelector('.login-form');
//         // hidden.classList.add('.hide')
//         console.log("LOGGED IN");
//         // document.location.replace('/');
//       } else {
//         alert('Failed to log in');
//       }
//     // }
//   };
  
//   document
//     .querySelector('.login-form')
//     .addEventListener('click', loginFormHandler);
  
    // const isLoggedIn = document.querySelector('.hpContainer').dataset.Logged_In
    // if(isLoggedIn){
    //   var aTags = document.querySelectorAll('.disabled-link');
    //     aTags.forEach(function(anchor){
    //       anchor.classList.add('.disabled-link');
    //     })
    // }

    const signinFormHandler = async function(event) {
      event.preventDefault();
    
      const userEl = document.querySelector('#email-input-signup');
      const passEl = document.querySelector('#pass-input-signup');
    
      const response = await fetch('/api/login/login', {
        method: 'POST',
        body: JSON.stringify({
          email: userEl.value,
          password: passEl.value,
        }),
        headers: { 'Content-Type': 'application/json' },
      });
    // change dirct
      if (response.ok) {
        console.log(response);
        document.location.replace('/');
      } else {
        alert('Failed to login');
      }
    };
    
    document
      .querySelector('.login-form')
      .addEventListener('submit', signinFormHandler);