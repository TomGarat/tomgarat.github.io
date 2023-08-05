var colorButtons = document.querySelectorAll(".color-button");
var wheelButtons = document.querySelectorAll(".wheel-button");


var audiImage = document.getElementById("audi-image");

var colorCategory = "nacre_"; // Catégorie de couleur par défaut
var currentColor = "blue_"; // Couleur actuelle par défaut
var currentWheel = "normal"; // Couleur actuelle par défaut
 
function UpdatePrice() {
    var basePrice = 145000; // Prix de base de la voiture
    var colorPrice = 0; // Prix de la couleur
    var wheelPrice = 0; // Prix des jantes

    // Calculer le prix de la couleur
    if (currentColor === "blue") {
        colorPrice = 34000;
    } else if (currentColor === "nacre") {
        colorPrice = 56000;
    }
    // Calculer le prix des jantes
    if (currentWheel === "normal"){
        wheelPrice = 6000;
    } else if (currentWheel === "medium"){
        wheelPrice = 11000;
    } else if (currentWheel === "premium"){
        wheelPrice = 17000;
    }

    // Calculer le prix total
    var totalPrice = (basePrice + colorPrice + wheelPrice);

    // Afficher le prix total dans la console
    console.log("Total price: $" + totalPrice);

     // Afficher le prix total dans l'élément HTML correspondant
	 var priceElement = document.getElementById("price");
    priceElement.innerHTML = "Prix total : $" + totalPrice.toLocaleString('fr-FR');
}

// Gérer les boutons de couleur
for (var i = 0; i < colorButtons.length; i++) {
    colorButtons[i].addEventListener("click", function() {
        var color = this.getAttribute("data-color");
        audiImage.src = "img/cars/e-tron-gt/" + color + "_" + audiImage.src.split("/").pop().split("_")[1]
        currentColor = color;
        UpdatePrice(); // Appeler la fonction UpdatePrice
    });
}


// Gérer les boutons de roues
for (var i = 0; i < wheelButtons.length; i++) {
    wheelButtons[i].addEventListener("click", function() {
        var wheel = this.getAttribute("data-wheel");
        audiImage.src = "img/cars/e-tron-gt/" + audiImage.src.split("/").pop().split("_")[0] + "_" + wheel + ".png";
        currentWheel = wheel;
        UpdatePrice(); // Appeler la fonction UpdatePrice
    });
}