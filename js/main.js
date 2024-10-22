const Immagini = document.getElementById("immagini");

//creo un tag img con un'altra foto
const secondImg = document.createElement("img");
secondImg.id = "secondaFoto";
secondImg.src = "./img/yellow_lamp.png";
secondImg.alt = "lampadinaaccesa";

console.log(secondImg);

//aggiungo la seconda immagine al div immagini nell'html
Immagini.append(secondImg);

const firstButton = document.getElementById("comando");
console.log(firstButton);

const primaFoto = document.getElementById("primaFoto");
console.log(primaFoto);

//scrivo una funzione per scambiare le immagini al click del bottone
firstButton.addEventListener("click", () => {
	primaFoto.replaceWith(secondImg);
});
