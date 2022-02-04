const loginFormHandler = async (event) => {
    event.preventDefault();
  
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
        document.location.replace('/');
      } else {
        alert('Failed to log in');
      }
    }
  };
  
  document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);
  