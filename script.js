// Function to show alerts
function showAlert(message, type) {
    let alertDiv = document.getElementById("alertMessage");
    alertDiv.className = `alert alert-${type}`;
    alertDiv.innerText = message;
    alertDiv.classList.remove("d-none");
    setTimeout(() => alertDiv.classList.add("d-none"), 3000);
}

// Function to toggle between login & registration forms
function toggleForms() {
    document.getElementById("registerForm").classList.toggle("d-none");
    document.getElementById("loginForm").classList.toggle("d-none");
}

// Register a new user
function register() {
    let fullName = document.getElementById("regFullName").value;
    let email = document.getElementById("regEmail").value;
    let password = document.getElementById("regPassword").value;

    if (fullName === "" || email === "" || password === "") {
        showAlert("All fields are required!", "danger");
        return;
    }

    // Check if user already exists
    if (localStorage.getItem(email)) {
        showAlert("User already registered!", "warning");
        return;
    }

    // Store user details
    let user = { fullName, email, password };
    localStorage.setItem(email, JSON.stringify(user));
    showAlert("Registration successful!", "success");
}

// Login user
function login() {
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    let storedUser = localStorage.getItem(email);
    if (!storedUser) {
        showAlert("User not found!", "danger");
        return;
    }

    let user = JSON.parse(storedUser);
    if (user.password !== password) {
        showAlert("Incorrect password!", "danger");
        return;
    }

    showAlert(`Welcome, ${user.fullName}!`, "success");
}
