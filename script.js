// Login functionality
document.getElementById('login-box').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission
  
    // Add your login verification logic here
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Example: check if the username is "admin" and password is "password"
    if (username === 'baosvaldo' && password === 'bapassword') {
      window.location.href = 'ba_home.html'; // Redirect to the home page
    } else {
      alert('Invalid login credentials. Please try again.');
    }
  });
  
  // Redirect to the main website
  function redirectToWebsite() {
    window.location.href = 'https://www.borderangels.org';
  }
  