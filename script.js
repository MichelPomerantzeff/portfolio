function sendEmail(event) {

    const templateParams = {
        to_name: "Michel",
        from_name: document.getElementById('fullName').value,
        email: document.getElementById('email_id').value,
        message: document.getElementById('message_id').value
    }

    Swal.fire({
        title: "Email Sent!",
        text: "Your message has been sent successfully. I'll get back to you soon!",
        icon: "success",
        customClass: {
            confirmButton: 'main-btn'
        },
        buttonsStyling: false
    });

    emailjs.send("service_czeakyo", "template_b5tnj5b", templateParams, "sQZWQt9UVdFJuCd3p")
        .then(response => {
            console.log("Email enviado com sucesso! Code: ", response.status, response.text);
        }, (err) => {
            console.log("ERRO: ", err)
        })
}

function validateForm(event) {
    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email_id').value;
    var message = document.getElementById('message_id').value;

    // Reset all error messages
    document.querySelector('.name_error_message').innerHTML = '';
    document.querySelector('.email_error_message').innerHTML = '';
    document.querySelector('.message_error_message').innerHTML = '';

    if (fullName.trim() === '') {
        document.querySelector('.name_error_message').innerHTML = 'Please enter your name';
        return;
    }

    if (email.trim() === '') {
        document.querySelector('.email_error_message').innerHTML = 'Please enter your email';
        return;
    } else if (!isValidEmail(email)) {
        document.querySelector('.email_error_message').innerHTML = 'Please enter a valid email address';
        return;
    }

    if (message.trim() === '') {
        document.querySelector('.message_error_message').innerHTML = 'Please enter your message';
        return;
    }

    sendEmail();

    // Reset the form fields
    document.getElementById('contactForm').reset();
}

function isValidEmail(email) {
    // Basic email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function clearError(errorId) {
    // Clear the error message when the user starts typing
    document.querySelector('.' + errorId).innerHTML = '';
}