function toCadastro() {
    let divCadastro = document.getElementById('divCadastro');
    let divLogin = document.getElementById('divLogin');
    let btnAbaCadastro = document.getElementById('idBtnAbaCadastro');
    let btnAbaLogin = document.getElementById('idBtnAbaLogin');

    divLogin.style.display = 'none';
    divCadastro.style.display = 'block';
    
    btnAbaCadastro.style.borderBottom = '3px solid #04afab';
    btnAbaCadastro.style.opacity = '100%';    
    btnAbaLogin.style.border = 'none';
    btnAbaLogin.style.opacity = '50%';
}

function toLogin() {
    let divCadastro = document.getElementById('divCadastro');
    let divLogin = document.getElementById('divLogin');
    let btnAbaCadastro = document.getElementById('idBtnAbaCadastro');
    let btnAbaLogin = document.getElementById('idBtnAbaLogin');

    divCadastro.style.display = 'none';
    divLogin.style.display = 'block';
    
    btnAbaLogin.style.borderBottom = '3px solid #04afab';
    btnAbaLogin.style.opacity = '100%';    
    btnAbaCadastro.style.border = 'none';
    btnAbaCadastro.style.opacity = '50%';
}