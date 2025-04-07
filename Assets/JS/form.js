// FUNÇÕES
function validarNome(nome) {
    const nomeLimpo = nome.trim()
    const regex = /^[A-Za-zÀ-ÿ\s]+$/;

    return nomeLimpo.length >= 3 && regex.test(nomeLimpo);
}
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email.trim());
}
// function aplicarMascara(input, mascara) {
//     input.addEventListener('input', () => {
//         let valor = input.value.replace(/\D/g, '');
//         let resultado = '';
//         let i = 0;

//         for (let m of mascara) {
//             if (m === '#') {
//                 if (valor[i]) {
//                     resultado += valor[i++];
//                 } else {
//                     break;
//                 }
//             } else {
//                 resultado += m;
//             }
//         }

//         input.value = resultado;
//     });
// }

// aplicarMascara(inputCPF, "###.###.###-##")
// aplicarMascara(inputTelefone, "(##) #####-####")

function validarCPF(cpf) {
    cpf = cpf.replace(/\D/g, '');

    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
        return false;
    }


    let soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf[i]) * (10 - i);
    }
    let digito1 = (soma * 10) % 11;
    if (digito1 === 10 || digito1 === 11) digito1 = 0;
    if (digito1 !== parseInt(cpf[9])) return false;


    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf[i]) * (11 - i);
    }
    let digito2 = (soma * 10) % 11;
    if (digito2 === 10 || digito2 === 11) digito2 = 0;
    if (digito2 !== parseInt(cpf[10])) return false;

    return true;
}



function validarTelefone(telefone) {
    const numeroLimpo = telefone.replace(/\D/g, '');
    return numeroLimpo.length === 11;
}

function validarSelect(select) {
    return select.value !== "";
}

function resetarBotaoTermos() {
    inputTermos.checked = false;
    botao.disabled = true;
    botao.classList.replace('botaoAtivado', 'botaoDesativado');
}

function resetarBordas() {
    const inputBorda = document.querySelectorAll('.fordform');
    
    inputBorda.forEach(input => {
        input.classList.remove('valido', 'invalido');
    });
}

function mostrarErro(idSpan, mensagem) {
    const span = document.getElementById(idSpan);
    span.textContent = mensagem;
    span.style.display = 'block';
}

function esconderErro(idSpan) {
    const span = document.getElementById(idSpan);
    span.textContent = '';
    span.style.display = 'none';
}
//eventos
const inputNome = document.getElementById('nome')
inputNome.addEventListener('input', () => {
    const nomeValido = validarNome(inputNome.value)
    inputNome.classList.remove('valido', 'invalido');
    inputNome.classList.add(nomeValido ? 'valido' : 'invalido');

    if (!nomeValido) {
        mostrarErro('erro-nome', 'Insira o nome');
    } else {
        esconderErro('erro-nome');
    }
})

const inputEmail = document.getElementById('email');
inputEmail.addEventListener('input', () => {
    const valido = validarEmail(inputEmail.value);
    inputEmail.classList.remove('valido', 'invalido');
    inputEmail.classList.add(valido ? 'valido' : 'invalido');

    if (!valido) {
        mostrarErro('erro-email', 'Insira um e-mail válido');
    } else {
        esconderErro('erro-email');
    }
});


const inputCPF = document.getElementById('cpf');
inputCPF.addEventListener('input', () => {
    const cpfLimpo = inputCPF.value.replace(/\D/g, '');
    const valido = cpfLimpo.length === 11 && validarCPF(inputCPF.value);
    inputCPF.classList.remove('valido', 'invalido');
    inputCPF.classList.add(valido ? 'valido' : 'invalido');

    if (!valido) {
        mostrarErro('erro-cpf', 'Insira o CPF');
    } else {
        esconderErro('erro-cpf');
    }
});

const inputSobrenome = document.getElementById('sobrenome')
inputSobrenome.addEventListener('input', () => {
    const valido = validarNome(inputSobrenome.value);
    inputSobrenome.classList.remove('valido', 'invalido');
    inputSobrenome.classList.add(valido ? 'valido' : 'invalido');

    if (!valido) {
        mostrarErro('erro-sobrenome', 'Insira o sobrenome');
    } else {
        esconderErro('erro-sobrenome');
    }
});

const inputTelefone = document.getElementById('telefone');
inputTelefone.addEventListener('input', () => {
    const valido = validarTelefone(inputTelefone.value);
    inputTelefone.classList.remove('valido', 'invalido');
    inputTelefone.classList.add(valido ? 'valido' : 'invalido');

    if (!valido) {
        mostrarErro('erro-telefone', 'Insira o telefone');
    } else {
        esconderErro('erro-telefone');
    }
});


const inputSelect = document.getElementById('contato');
inputSelect.addEventListener('change', () => {
    const valido = inputSelect.value !== '';
    inputSelect.classList.remove('valido', 'invalido');
    inputSelect.classList.add(valido ? 'valido' : 'invalido');

    if (!valido) {
        mostrarErro('erro-contato', 'Selecione uma opção');
    } else {
        esconderErro('erro-contato');
    }
});

const inputTermos = document.getElementById('inputTermoCondicoes');
inputTermos.addEventListener('change', () => {
    if (!inputTermos.checked) {
        botao.disabled = true;
        botao.classList.replace('botaoAtivado', 'botaoDesativado');
    } else {
        botao.classList.replace('botaoDesativado', 'botaoAtivado');

        botao.disabled = false;
    }
})

const botao = document.getElementsByClassName('botaoDesativado')[0];
const formulario = document.getElementById('formulario')
formulario.addEventListener('submit', (event) => {
    const camposObrigatorios = [inputNome, inputSobrenome, inputEmail, inputCPF, inputTelefone, inputSelect];
    const algumVazio = camposObrigatorios.some(input => input.value.trim() === '');
    const camposInvalidos = formulario.querySelectorAll('.invalido');

    // Marcar os campos vazios como inválidos (visual)
    camposObrigatorios.forEach(input => {
        if (input.value.trim() === '') {
            input.classList.remove('valido');
            input.classList.add('invalido');
        }
    });

    if (algumVazio || camposInvalidos.length > 0 || !inputTermos.checked) {
        event.preventDefault();
        Swal.fire({
            title: "Erro!",
            text: "Por favor, corrija os campos destacados em vermelho.",
            icon: "error",
            confirmButtonText: "OK",
            customClass: {
                title: "titulo-popup",
                popup: "popup",
                confirmButton: "botao-popup"
            }
        });
        return;
    }

    // Se tudo estiver certo
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
        resetarBotaoTermos();
        resetarBordas();
        esconderErro();
    });
});



// MASCARAS

IMask(inputCPF, {
    mask: '000.000.000-00'
})

IMask(inputTelefone, {
    mask: '(00) 00000-0000'
})
