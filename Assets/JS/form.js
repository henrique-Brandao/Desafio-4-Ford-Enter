function mostrarAlerta(event) {
    event.preventDefault();

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