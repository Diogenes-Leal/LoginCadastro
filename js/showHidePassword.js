function showHide(){
    let divLogin = document.getElementById('divLogin');
    let passwordField;
    let icon;

    if (divLogin.style.display != 'none'){
        passwordField = document.getElementById('senhaLogin');
        icon = document.getElementById('idShowHideLogin');
    } else {
        passwordField = document.getElementById('senhaCadastro');
        icon = document.getElementById('idShowHideCadastro');
    }
    
    if(passwordField.type === 'password') {
        passwordField.type = 'text';
        icon.className = 'fa-solid fa-eye-slash';
    } else if (passwordField.type === 'text'){
        passwordField.type = 'password';
        icon.className = 'fa-solid fa-eye';
    }
}