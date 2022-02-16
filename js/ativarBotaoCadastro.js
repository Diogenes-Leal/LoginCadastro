function enableBtnCadastrar() {
    let infosDeCadastro = document.getElementsByClassName('classInfoDeCadastro');
    let passwordCadastro = document.getElementById('senhaCadastro');
    let checkboxCadastro = document.getElementById('idTermosUso');
    let infosValues = [];
    let btnCadastrar = document.getElementById('idBtnCadastrar');
    let camposPreenchidos = true;

    for(let i = 0; i < infosDeCadastro.length; i++){
        infosValues.push(infosDeCadastro[i].value);
    }

    infosValues.push(passwordCadastro.value);

    infosValues.forEach( element => {
        if(element === '' || element === undefined || element === null) {
            camposPreenchidos = false;
        }
    })

    if(!checkboxCadastro.checked){
        camposPreenchidos = false;
    }

    if(camposPreenchidos) {
        btnCadastrar.disabled = true;
        btnCadastrar.style.backgroundColor = '#5c2e91';
        btnCadastrar.style.border = 'none';
        btnCadastrar.style.color = '#ffffff'
    }
}