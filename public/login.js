const loginFormHandler = async (event) => {
    event.preventDefault();
    console.log('hey')
  
    const email = document.querySelector('#username-input-login');
    const password = document.querySelector('#password-input-login');
  
    if (email && password) {
      const response = await fetch('/api/login/login', {
        method: 'POST',
        body: JSON.stringify({ email: email.value, password: password.value }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        console.log(response);
        var aTags = document.querySelectorAll('.disabled-link');
        aTags.forEach(function(anchor){
          anchor.classList.remove('disabled-link');
        })
        // document.location.replace('/');
      } else {
        alert('Failed to log in');
      }
    }
  };
  
  document
    .querySelector('.login-form')
    .addEventListener('click', loginFormHandler);
  