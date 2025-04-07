function mostrarAlerta(event) {
    event.preventDefault()
        Swal.fire({
            title: "Sucesso!",
            text: "Formulário enviado com sucesso!",
            icon: "success",
            confirmButtonText: "OK",
            customClass: {
                title: "titulo-popup",
                popup: "popup",
                confirmButton: "botao-popup"
            }
        }).then(() => {
            document.getElementById("formulario").reset();
        });
}


const input = document.getElementById('inputTermoCondicoes')
const botao = document.getElementsByClassName('botaoDesativado')[0]

input.addEventListener('change', () => {
    if (!input.checked) {
        botao.disabled = true
        botao.classList.replace('botaoAtivado', 'botaoDesativado')
    } else {
        botao.classList.replace('botaoDesativado', 'botaoAtivado')

        botao.disabled = false
    }
})

