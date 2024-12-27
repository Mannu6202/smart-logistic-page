// Get the form and response message elements
const form = document.getElementById('ContactForm');
const responseMessage = document.getElementById('resposneMessage');

// Event listener for form submission
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the default form submission behavior

    // Get form field values
    const name = document.getElementById('name').value;
    const email = document.getElementById('Email').value;
    const message = document.getElementById('Message').value;

    // Basic form validation
    if (!name || !email || !message) {
        // If any field is empty, show error message
        responseMessage.innerHTML = '<p style="color: red;">All fields are required.</p>';
    } else {
        // If validation passes, show success message
        responseMessage.innerHTML = '<p style="color:red;">Thank you for your message, ' + name + '. We will get back to you shortly.</p>';

        // Clear the form fields
        form.reset();
    }
});