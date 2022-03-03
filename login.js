document.getElementById('login-submit').addEventListener('click', function () {
    //get email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    //get password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;

    //check email and password
    if (userEmail == 'shakibaalam092@gamil.com' && userPassword == 'shakiba') {

        // console.log('valid user');

        window.location.href = 'banking.html';
    }
    else {

    }

})