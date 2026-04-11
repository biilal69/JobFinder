// Wait for the page to load
document.addEventListener("DOMContentLoaded", function() {
    
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");

    // ----- LOGIN VALIDATION -----
    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Stop page from refreshing
            
            const uname = document.getElementById("uname").value.trim();
            const pword = document.getElementById("pword").value.trim();
            const msgBox = document.getElementById("login-msg");

            if (uname === "" || pword === "") {
                msgBox.textContent = "Error: Please fill in all fields.";
                msgBox.className = "msg error";
            } else {
                msgBox.textContent = "Success! Redirecting to jobs...";
                msgBox.className = "msg success";
                // Simulate redirect after 1 second
                setTimeout(() => { window.location.href = "jobs.html"; }, 1000);
            }
        });
    }

    // ----- SIGNUP VALIDATION -----
    if (signupForm) {
        signupForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Stop page from refreshing
            
            const fname = document.getElementById("fname").value.trim();
            const lname = document.getElementById("lname").value.trim();
            const uname = document.getElementById("Username").value.trim();
            const email = document.getElementById("email").value.trim();
            const pword1 = document.getElementById("CPword").value.trim();
            const pword2 = document.getElementById("CPword2").value.trim();
            const msgBox = document.getElementById("signup-msg");

            // 1. Check for empty fields
            if (fname === "" || lname === "" || uname === "" || email === "" || pword1 === "" || pword2 === "") {
                msgBox.textContent = "Error: Please fill in all required fields.";
                msgBox.className = "msg error";
                return;
            }

            // 2. Check password length
            if (pword1.length < 8) {
                msgBox.textContent = "Error: Password must be at least 8 characters long.";
                msgBox.className = "msg error";
                return;
            }

            // 3. Check if passwords match
            if (pword1 !== pword2) {
                msgBox.textContent = "Error: Passwords do not match.";
                msgBox.className = "msg error";
                return;
            }

            // If everything is correct
            msgBox.textContent = "Success! Account created. Redirecting...";
            msgBox.className = "msg success";
            
            // Simulate redirect after 1.5 seconds
            setTimeout(() => { window.location.href = "jobs.html"; }, 1500);
        });
    }
});
