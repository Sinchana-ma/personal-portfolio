// JavaScript Validation for Contact Form
document.getElementById('contact-form').addEventListener('submit', function(e) {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    if (name === '' || email === '' || subject === '' || message === '') {
        alert('Please fill out all fields.');
        e.preventDefault(); // Prevent form from submitting
    } else {
        alert('Message sent successfully!');
    }
});
