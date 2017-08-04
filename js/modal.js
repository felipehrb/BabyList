var modalLista = document.getElementById("ModalCadastroPresente");
var btnLista = document.getElementById("adicionarPresente");
var spanLista = document.getElementsByClassName("close")[0];

btnLista.onclick = function() {
    modalLista.style.display = "block";
}


window.onclick = function(event) {
    if (event.target == modalLista) {
        modalLista.style.display = "none";
    }
    
}

spanLista.onclick = function() {
	 modalLista.style.display = "none";
}
