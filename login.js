document.getElementById('loginForm').addEventListener('submit', function(event) {
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('emailError');
    
    // Simple email validation
    if (!validateEmail(email)) {
        emailError.style.display = 'block';
        event.preventDefault(); // Prevent form submission if invalid
    } else {
        emailError.style.display = 'none';
    }
});

// Email validation function
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
