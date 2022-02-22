

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

      //hey testing