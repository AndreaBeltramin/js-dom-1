//prendo gli elementi che mi servono dall'html
const listaImmagini = document.getElementById("listaImmagini");
const primaFoto = document.getElementById("primaFoto");

//creo un tag img con un'altra foto
const secondaFoto = document.createElement("img");

//setto gli attributi di img
secondaFoto.setAttribute("id", "secondaFoto");
secondaFoto.setAttribute("src", "./img/yellow_lamp.png");
secondaFoto.setAttribute("class", "d-none");

//inserisco nell'html il nuovo elemento come figlio di listaImmagini
listaImmagini.appendChild(secondaFoto);

//richiamo il bottone
const button = document.getElementById("comando");
console.log(button);

const spegni = () => {
	primaFoto.classList.remove("d-none");
	secondaFoto.classList.add("d-none");
	button.innerHTML = "Accendi";
};

const accendi = () => {
	primaFoto.classList.add("d-none");
	secondaFoto.classList.remove("d-none");
	button.innerHTML = "Spegni";
};

const switchLight = () => {
	if (button.innerHTML === "Accendi") {
		accendi();
	} else {
		spegni();
	}
};

//con un click del bottone tolgo la classe d-none alla seconda immagine
//per poterla vedere e la aggiungo alla prima immagine per poterla nascondere
button.addEventListener("click", switchLight);
