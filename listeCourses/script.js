//Déclaration des constantes nécessaires
const newCourseInput = document.getElementById("texteCourse");
const boutonAjout = document.getElementById("boutonAjout");
const tBody = document.getElementById("tbody");
const modifNoCourseInput = document.getElementById("modificationNoCourse");
const modifTextCourseInput = document.getElementById("modificationTextCourse");
const boutonModif = document.getElementById("boutonModification");
const suppressionCourseInput = document.getElementById("suppressionCourse");
const boutonSuppression = document.getElementById("boutonSuppression");
const boutonReset = document.getElementById("boutonReset");

//Ajoutd'une course
boutonAjout.addEventListener("click", () => {
    numeroCourse = localStorage.length + 1;
    localStorage.setItem("course" + numeroCourse, newCourseInput.value);
    location.reload();
    newCourseInput.value = "";
});

//Affichage des courses

for (let i = 1; i <= localStorage.length; i++) {
    let course = localStorage.getItem("course" + i);
    if (course !== "Element supprimé") {
        const tr = document.createElement("tr");
        tBody.appendChild(tr);
        const td1 = document.createElement("td");
        const td2 = document.createElement("td");
        td1.textContent = i;
        td2.textContent = course;
        tBody.appendChild(td1);
        tBody.appendChild(td2);
    }
}

//Modification d'une course
boutonModif.addEventListener("click", () => {
    if (modifNoCourseInput.value > localStorage.length) {
        alert("Cette course n'existe pas");
    }
    localStorage.setItem("course" + modifNoCourseInput.value, modifTextCourseInput.value);
    location.reload();
});


//Suppression des courses
boutonSuppression.addEventListener("click", (event) => {
    event.preventDefault();
    if (localStorage.getItem("course" + suppressionCourseInput.value) === "Element supprimé") {
        alert("Cette course a deja ete supprimee");
    } else {
        if (suppressionCourseInput.value > localStorage.length) {
            alert("Cette course n'existe pas");
        }
    }
    localStorage.setItem("course" + suppressionCourseInput.value, "Element supprimé");
    location.reload();
});

//Reset liste
boutonReset.addEventListener("click", () => {
    localStorage.clear();
    location.reload();
});

