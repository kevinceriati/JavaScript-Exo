console.log("exercice 6");


$(document).ready(function () {

    $('.alert').hide();

    $('.btn-primary').on('click', function () {
        var  mailLog = 'hello@me.com';
        var pwdLog = 'secret8';
        var mail = $('#email').val();
        var pwd = $('#password').val();
        console.log(mail);
        if ((mail === '') || !validateEmail(mail)) {
            $('.alert').show().text('email invalide !')
        }else{
            if ((pwd === '') || (pwd.length < 6)) {
                $('.alert').show().text('password invalide !')
            }else{
                $('.alert').hide();
                window.alert('merci tapette')
            }          
        }
        
        if ((mail === mailLog) && (pwd === pwdLog)) {
            $('.alert').show().text('Vous êtes connecté')
        }
    })
});

function validateEmail(mail) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(mail).toLowerCase());
}
 







