//Déclaration des constantes nécessaires
const score = document.getElementById("score");
const player1Button = document.getElementById("player1Button");
const player2Button = document.getElementById("player2Button");
const resetButton = document.getElementById("resetButton");

//Initialisation des variables
let player1Score = 0;
let player2Score = 0;

//Ajout des listeners sur les boutons
player1Button.addEventListener("click", () => {
    player1Score++;
    score.textContent = `Joueur 1 : ${player1Score} - Joueur 2 : ${player2Score}`;
});
player2Button.addEventListener("click", () => {
    player2Score++;
    score.textContent = `Joueur 1 : ${player1Score} - Joueur 2 : ${player2Score}`;
});
resetButton.addEventListener("click", () => {
    player1Score = 0;
    player2Score = 0;
    score.textContent = `Joueur 1 : ${player1Score} - Joueur 2 : ${player2Score}`;
});
