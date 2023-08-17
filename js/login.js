document.getElementById('submit-btn').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    if(email === 'mybank@gmail.com' && password === '123456'){
        window.location.href = 'bank.html'
    }
    else{
        alert('Invalid email or password!!')  
    }
})