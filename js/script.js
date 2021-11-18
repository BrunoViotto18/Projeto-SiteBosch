function aumentarTamanho(){
    document.getElementById('inputbusca').style.width="200px"
    document.getElementById('inputbusca').style.backgroundColor="#999999"
}

function voltarTamanho(){
    document.getElementById('inputbusca').style.width="57px"
    document.getElementById('inputbusca').style.backgroundColor="#fff"
}


const menu = document.body.querySelector(".menu")
const burger1 = document.body.querySelector("#burger1")
const burger2 = document.body.querySelector("#burger2")
const burger3 = document.body.querySelector("#burger3")
const menuBar = document.body.querySelector(".menu-bar")
const inputbusca = document.body.querySelector(".inputbusca");
const competenciasContainer = document.body.querySelector(".competencias-container")
const materia = document.body.querySelector("#materia")
const notaSenaiButton = document.body.querySelector(".nota-senai-btn")
const notaBoschButton = document.body.querySelector(".nota-bosch-btn")
const notaSenai = document.body.querySelector("#nota-senai")
const notaBosch = document.body.querySelector("#nota-bosch")
const pythonButton = document.body.querySelector("#botao1")
const cSharpButton = document.body.querySelector("#botao2")
const devOpsButton = document.body.querySelector("#botao3")
const webButton = document.body.querySelector("#botao4")
const modalTitleSenai = document.body.querySelector("#modal-header-title-senai")
const modalTitleBosch = document.body.querySelector("#modal-header-title-bosch")
const modalBodySenai = document.body.querySelector(".modal-body-senai")
const modalBodyBosch = document.body.querySelector("#modal-body-bosch")

//MenuBar
menu.addEventListener('click', () => {
    menuBar.classList.toggle("menu-bar-js")
    burger1.classList.toggle("burger1-js")
    burger2.classList.toggle("burger2-js")
    burger3.classList.toggle("burger3-js")
})

//Menu de Matérias
pythonButton.addEventListener("click", () => {
    competenciasContainer.style.display = "grid"
    notaSenaiButton.style.display = "flex"
    notaBoschButton.style.display = "flex"
    notaSenai.innerHTML = "Nota: 9,3"
    notaBosch.innerHTML = "Nota: 9,3"
    materia.innerHTML = "Matéria: Python"
    modalTitleSenai.innerHTML = "Prova Senai Python"
    modalTitleBosch.innerHTML = "Prova Bosch Python"
    modalBodySenai.style.display = "grid"
    modalBodyBosch.style.display = "grid"
})

cSharpButton.addEventListener("click", () => {
    competenciasContainer.style.display = "none"
    notaSenaiButton.style.display = "hidden"
    notaBoschButton.style.display = "hidden"
    notaSenai.innerHTML = "Nota: -,-"
    notaBosch.innerHTML = "Nota: -,-"
    materia.innerHTML = "Matéria: C#"
    modalTitleSenai.innerHTML = "Prova Senai C#"
    modalTitleBosch.innerHTML = "Prova Bosch C#"
    modalBodySenai.style.display = "none"
    modalBodyBosch.style.display="none"
})

devOpsButton.addEventListener("click", () => {
    competenciasContainer.style.display = "none"
    notaSenaiButton.style.display = "hidden"
    notaBoschButton.style.display = "hidden"
    notaSenai.innerHTML = "Nota: -,-"
    notaBosch.innerHTML = "Nota: -,-"
    materia.innerHTML = "Matéria: DevOps"
    modalTitleSenai.innerHTML = "Prova Senai DevOps"
    modalTitleBosch.innerHTML = "Prova Bosch DevOps"
    modalBodySenai.style.display = "none"
    modalBodyBosch.style.display="none"
})

webButton.addEventListener("click", () => {
    competenciasContainer.style.display = "none"
    notaSenaiButton.style.display = "hidden"
    notaBoschButton.style.display = "hidden"
    notaSenai.innerHTML = "Nota: -,-"
    notaBosch.innerHTML = "Nota: -,-"
    materia.innerHTML = "Matéria: Web"
    modalTitleSenai.innerHTML = "Prova Senai Web"
    modalTitleBosch.innerHTML = "Prova Bosch Web"
    modalBodySenai.style.display = "none"
    modalBodyBosch.style.display="none"
})

function openModal(mn) {
    let modal = document.getElementById(mn);

    if (typeof modal == 'undefined' || modal === null)
        return;

    modal.style.display = 'Block';
    document.body.style.overflow = 'hidden';
}

function closeModal(mn) {
    let modal = document.getElementById(mn);

    if (typeof modal == 'undefined' || modal === null)
        return;

    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function openModalsenai(mn) {
    let modal = document.getElementById(mn);

    if (typeof modal == 'undefined' || modal === null)
        return;

    modal.style.display = 'Block';
    document.body.style.overflow = 'hidden';
}

function closeModalsenai(mn) {
    let modal = document.getElementById(mn);

    if (typeof modal == 'undefined' || modal === null)
        return;

    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

