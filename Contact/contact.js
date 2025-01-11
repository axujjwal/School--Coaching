// Contact Form Handling
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        document.getElementById("formMessage").textContent = 
            `Thank you, ${name}! Your message has been received.`;
        
        // Clear the form fields
        document.getElementById("contactForm").reset();
    } else {
        document.getElementById("formMessage").textContent = 
            "Please fill out all fields.";
        document.getElementById("formMessage").style.color = "red";
    }
});
