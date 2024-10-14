// Signup function
function signup() {
    let username = document.getElementById('signupUsername').value;
    let email = document.getElementById('signupEmail').value;
    let password = document.getElementById('signupPassword').value;

    if (username && email && password) {
        alert('Sign up successful for ' + username);
        document.getElementById('signupForm').reset();
    } else {
        alert('Please fill out all fields.');
    }
}

// Login function
function login() {
    let username = document.getElementById('loginUsername').value;
    let password = document.getElementById('loginPassword').value;

    if (username && password) {
        alert('Login successful for ' + username);
        document.getElementById('loginForm').reset();
    } else {
        alert('Please enter valid login credentials.');
    }
}