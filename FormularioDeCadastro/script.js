document.querySelector("#Formulario").addEventListener("submit", function(event) {
    event.preventDefault(); 
    validaPassword();
});

function validaPassword() {
    var senha = document.querySelector("#senha").value;
    var confirmarSenha = document.querySelector("#confirmeSenha").value;

    if (senha !== confirmarSenha) {
        alert('As senhas não correspondem. Por favor, verifique e tente novamente.');
    } else {
        alert('Formulário enviado com sucesso!');
       
    }
}
