const EMAIL_LENGTH = 6, PASSWORD_LENGTH = 5;
let email, password;

email = prompt('Please input email');
if (email === '' || email === null) {
    alert('Canceled');
} else if (email.length < EMAIL_LENGTH) {
    alert('I don\'t know any emails having name length less than 6 symbols');
} else if (email === 'user@gmail.com' || email === 'admin@gmail.com') {
    password = prompt('Please input password');
    if (password === '' || password === null) {
        alert('Canceled');        
    } else if (email === 'user@gmail.com' && password === 'UserPass' || 
               email ==='admin@gmail.com' && password === 'AdminPass') {
        if (confirm('Do you want to change your password?')) {
            password = prompt('Please input your old password');
            if (password === '' || password === null) {
                alert('Canceled');
            } else if (email === 'user@gmail.com' && password === 'UserPass' ||
                       email ==='admin@gmail.com' && password === 'AdminPass') {
                password = prompt('Please input new password');
                if (password.length >= PASSWORD_LENGTH) {
                    if (prompt('Please confirm your new password') === password) {
                        alert('You have successfully changed your password.');
                    } else {
                        alert('You wrote the wrong password.');
                    }
                } else {
                    alert('It\'s too short password. Sorry.');
                }
            } else {
                alert('Wrong password');
            }
        } else {
            alert('You have failed the change');
        }
    } else {
        alert('Wrong password');
    }
} else {
    alert('I don\'t know you');
}