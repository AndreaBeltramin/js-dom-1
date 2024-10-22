const listaImmagini = document.getElementById("listaImmagini");

//creo un tag img con un'altra foto
const secondImg = document.createElement("img");
secondImg.id = "secondaFoto";
secondImg.src = "./img/yellow_lamp.png";
secondImg.alt = "lampadinaaccesa";

console.log(secondImg);

const firstButton = document.getElementById("comando");
console.log(firstButton);

const primaFoto = document.getElementById("primaFoto");
console.log(primaFoto);

//aggiungo la seconda immagine al div immagini nell'html
firstButton.addEventListener("click", () => {
	listaImmagini.append(secondImg);
	primaFoto.replaceWith(secondImg);
});
