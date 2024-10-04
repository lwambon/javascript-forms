function validateRegistrationForm() {
    
    clearErrors();

    let valid = true;

    // Name validation
    const name = document.getElementById('name').value;
    if (name === "") {
        document.getElementById('nameError').innerText = "Name is required";
        valid = false;
    }

    // Email validation
    const email = document.getElementById('email').value;
    if (!validateEmail(email)) {
        document.getElementById('emailError').innerText = "Invalid email format";
        valid = false;
    }

    // Password validation
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (password.length < 8) {
        document.getElementById('passwordError').innerText = "Password must be at least 8 characters long";
        valid = false;
    }
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').innerText = "Passwords do not match";
        valid = false;
    }

    // Age validation
    const age = document.getElementById('age').value;
    if (age < 18 || age > 100) {
        document.getElementById('ageError').innerText = "Age must be between 18 and 100";
        valid = false;
    }

    // Gender validation
    if (!document.querySelector('input[name="gender"]:checked')) {
        document.getElementById('genderError').innerText = "Please select a gender";
        valid = false;
    }

    // Country validation
    const country = document.getElementById('country').value;
    if (country === "") {
        document.getElementById('countryError').innerText = "Please select a country";
        valid = false;
    }

    // Terms and conditions validation
    const terms = document.getElementById('terms').checked;
    if (!terms) {
        document.getElementById('termsError').innerText = "You must agree to the terms and conditions";
        valid = false;
    }

    return valid;
}

function validateLoginForm() {
    // Clear previous error messages
    clearLoginErrors();

    let valid = true;

    // Email validation
    const loginEmail = document.getElementById('loginEmail').value;
    if (!validateEmail(loginEmail)) {
        document.getElementById('loginEmailError').innerText = "Invalid email format";
        valid = false;
    }

    // Password validation
    const loginPassword = document.getElementById('loginPassword').value;
    if (loginPassword === "") {
        document.getElementById('loginPasswordError').innerText = "Password is required";
        valid = false;
    }

    return valid;
}

function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function clearErrors() {
    document.getElementById('nameError').innerText = "";
    document.getElementById('emailError').innerText = "";
    document.getElementById('passwordError').innerText = "";
    document.getElementById('confirmPasswordError').innerText = "";
    document.getElementById('ageError').innerText = "";
    document.getElementById('genderError').innerText = "";
    document.getElementById('countryError').innerText = "";
    document.getElementById('termsError').innerText = "";
}

function clearLoginErrors() {
    document.getElementById('loginEmailError').innerText = "";
    document.getElementById('loginPasswordError').innerText = "";
}
