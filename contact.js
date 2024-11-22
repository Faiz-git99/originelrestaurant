// recupère l'élément nom 
let nom = document.querySelector("#nom");
console.log(nom);

nom.addEventListener("change", () => {
console.log("====== j'ai entendu change :--)");
});

let prenom = document.querySelector("#prenom");
console.log(prenom);

prenom.addEventListener("change", () => {
    console.log("====== j'ai entendu change :--)");
    });