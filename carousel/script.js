/* Recuperation des elements des boutons et des images */
const buttons = document.querySelectorAll(".btn");
const slides = document.querySelectorAll(".slide");


/* Ajout des listeners sur les boutons   */
buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        /* Determination de l'incrémentation en fonction du bouton cliqué */
        const nextSlide = e.target.id === "next" ? 1 : -1;

        /* Recuperation de l'élément de l'image active */
        const activeSlide = document.querySelector(".active");

        /* Determination de l'index de l'image suivante */
        newIndex = [...slides].indexOf(activeSlide) + nextSlide;

        /* Gestion des index de début ou fin de carousel */
        if (newIndex < 0) {
            newIndex = slides.length - 1;
        } else if (newIndex >= slides.length) {
            newIndex = 0;
        }

        /* Suppression de la classe active sur l'image active */
        activeSlide.classList.remove("active");

        /* Ajout de la classe active sur l'image suivante */
        slides[newIndex].classList.add("active");
    });
});