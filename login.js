document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Retrieve username and password
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Example of sending the data to a server for authentication
    // Here, you can replace this with your own logic
    // This is just for demonstration purposes
    authenticate(username, password);
});

function authenticate(username, password) {
    // Here, you can send an AJAX request to your server for authentication
    // For demonstration, let's just do a simple check
    if (username === "admin" && password === "12345") {
        // If authentication is successful, redirect to index.html
        window.location.href = "index.html";
    } else {
        // If authentication fails, show an error message
        alert("Invalid username or password");
    }
}
