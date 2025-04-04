//car
let carArr = [];

class Car {
    constructor(nome, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, image){
        this.nome =  nome;
        this.preco = preco;
        this.alturaCacamba = alturaCacamba;
        this.alturaVeiculo = alturaVeiculo;
        this.alturaSolo = alturaSolo;
        this.capacidadeCarga = capacidadeCarga;
        this.motor = motor;
        this.potencia = potencia;
        this.volumeCacamba = volumeCacamba;
        this.roda = roda;
        this.image = image;
    }
} 

function SetCarToCompare(input, car) {
    if (!input.checked) {
        const carroIndex = GetCarArrPosition(car);
        carArr.splice(carroIndex, 1);
        return;
    }

    if (carArr.length > 1) {
        input.checked = false;
        Swal.fire({
            title: "Aviso",
            text: "Selecione apenas 2 carros",
            icon: "warning",
            confirmButtonText: "OK",
            customClass: {
                title: "titulo-popup",
                popup: "popup",
                confirmButton: "botao-popup"
            }
        })
        return;
    }

        carArr.push(car);
    }


    function ShowCarDetails(car) {
        document.getElementById("carro-imagem-show").src = car.image;
        document.getElementById("show_modelo").innerHTML = car.nome;
        document.getElementById("show_alturacacamba").innerHTML = car.alturaCacamba;
        document.getElementById("show_alturaveiculo").innerHTML = car.alturaVeiculo;
        document.getElementById("show_alturasolo").innerHTML = car.alturaSolo;
        document.getElementById("show_capacidadecarga").innerHTML = car.capacidadeCarga;
        document.getElementById("show_motor").innerHTML = car.motor;
        document.getElementById("show_potencia").innerHTML = car.potencia;
        document.getElementById("show_volumecacamba").innerHTML = car.volumeCacamba;
        document.getElementById("show_roda").innerHTML = car.roda;
        document.getElementById("show_preco").innerHTML = `R$${car.preco}`;
    
        document.getElementById("ShowCar").showModal();
    }
    
    function HideCarDetails() {
        document.getElementById("ShowCar").close();
    }


// search on array if exist carClass returning 1 if not return -1
function GetCarArrPosition(car) {
    for(let i = 0; i < carArr.length; i++){
        if(carArr[i].nome  === car.nome)
            return i;
    }
    return -1;
}


function ShowCompare() {
    if(carArr.length !== 2 ) {
        Swal.fire({
            title: "Aviso",
            text: "Precisa marcar 2 carros para apresentar a comparação",
            icon: "warning",
            confirmButtonText: "OK",
            customClass: {
                title: "titulo-popup",
                popup: "popup",
                confirmButton: "botao-popup"
            }
        })
        return
    }

    UpdateCompareTable();

    const dialog = document.getElementById("compare")
    dialog.showModal()
}

function HideCompare(){    
    const dialog = document.getElementById("compare")
    dialog.close()
}

function UpdateCompareTable() {
    const imgUm = document.getElementById("carro-imagem0")
    const imgDois = document.getElementById("carro-imagem1")

    imgUm.src = carArr[0].image
    imgDois.src = carArr[1].image

    const modeloUm = document.getElementById("compare_modelo_0")
    const modeloDois = document.getElementById("compare_modelo_1")

    modeloUm.innerHTML = carArr[0].nome
    modeloDois.innerHTML = carArr[1].nome
    
    const alturaCacambaUm = document.getElementById("compare_alturacacamba_0")
    const alturaCacambaDois = document.getElementById("compare_alturacacamba_1")

    alturaCacambaUm.innerHTML = carArr[0].alturaCacamba
    alturaCacambaDois.innerHTML = carArr[1].alturaCacamba

    const alturaVeiculoUm = document.getElementById("compare_alturaveiculo_0")
    const alturaVeiculoDois = document.getElementById("compare_alturaveiculo_1")

    alturaVeiculoUm.innerHTML = carArr[0].alturaVeiculo
    alturaVeiculoDois.innerHTML = carArr[1].alturaVeiculo

    const alturaSoloUm = document.getElementById("compare_alturasolo_0")
    const alturaSoloDois = document.getElementById("compare_alturasolo_1")

    alturaSoloUm.innerHTML = carArr[0].alturaSolo
    alturaSoloDois.innerHTML = carArr[1].alturaSolo
    
    const capacidadeCargaUm = document.getElementById("compare_capacidadecarga_0")
    const capacidadeCargaDois = document.getElementById("compare_capacidadecarga_1")

    capacidadeCargaUm.innerHTML = carArr[0].capacidadeCarga
    capacidadeCargaDois.innerHTML = carArr[1].capacidadeCarga

    const motorUm = document.getElementById("compare_motor_0")
    const motorDois = document.getElementById("compare_motor_1")

    motorUm.innerHTML = carArr[0].motor
    motorDois.innerHTML = carArr[1].motor

    const potenciaUm = document.getElementById("compare_potencia_0")
    const potenciaDois = document.getElementById("compare_potencia_1")

    potenciaUm.innerHTML = carArr[0].potencia
    potenciaDois.innerHTML = carArr[1].potencia

    const volumeCacambaUm = document.getElementById("compare_volumecacamba_0")
    const volumeCacambaDois = document.getElementById("compare_volumecacamba_1")

    volumeCacambaUm.innerHTML = carArr[0].volumeCacamba
    volumeCacambaDois.innerHTML = carArr[1].volumeCacamba

    const rodaUm = document.getElementById("compare_roda_0")
    const rodaDois = document.getElementById("compare_roda_1")

    rodaUm.innerHTML = carArr[0].roda
    rodaDois.innerHTML = carArr[1].roda

    const precoUm = document.getElementById("compare_preco_0")
    const precoDois = document.getElementById("compare_preco_1")

    precoUm.innerHTML = `R$${carArr[0]. preco}`
    precoDois.innerHTML = `R$${carArr[1].preco}`
    
}
