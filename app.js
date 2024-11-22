const express = require("express");

const url = require('url');

const fs = require('fs');

const app = express();

// l'endroit où se situe les vues qui s'affichent sur le naviagteur
app.set("views", "./views");

// préciser le moteur de la lecture de vues à savoir esj
app.set("view engine", "ejs");

// précise le répertoire 'public' qui contient le fichier statics
app.use(express.static("public"));

// insérer un route GET
app.get("/", (req, res) => {
    res.end("Le serveur fonctionne");
});


// une route get qui mène au fichier acceuil
app.get("/accueil", (req, res) => {

    /*fs.readFile("acceuil.html", (err, data) => {
    res.writeHead(200, {"content-type" : "text/html;charset=utf-8"});
    res.write(data);
    res.end(); */

let time = "Bonjour";
const date = new Date();



if(date.getHours() > 15) {
 time = "Bonjour";
}

    utilisateur = {
        nom : ["GANGSTA", "boss", "chigné"], 
        prenom : "Saka",
        montemps : time
    };
    res.render("accueil", utilisateur);

});



app.get("/equipe", (req, res) => {
    
    /* fs.readFile("equipe.html", (err, data) => {
        res.writeHead(200, {"content-type" : "text/html;charset=utf-8"});
        res.write(data);
        res.end(); 
    }) */
    
        objetEquipe = {
            cuisine : ["Moussa", "Alfred", "Etschebest", "Mercotte"],
            chefequipe : ["Biden", "Trump", "Obama", "Naza"],
            serveuse : ["Le sommer", "Nathalie", "Anne Hidalgo"],
            
        }; 
    


        res.render("equipe", objetEquipe);

});

app.get("/menu", (req, res) => {

/*    fs.readFile("menu.html", (err, data) => {
    res.writeHead(200, {"content-type" : "text/html;charset=utf-8"});
    res.write(data);
    res.end();
}) */

NosMenus = {
    plat : ["Hamburger double steack", "Wrap", "Tacos","Quesadilla"],
    prix : ["plat 1 : 12€", "plat 2 : 10€", " plat 3 : 12€", "plat 4 : 15€"],

}

res.render("menu", NosMenus);

});

app.get("/contact", (req, res) => {
    
 /*   fs.readFile("contact.html", (err, data) => {
    res.writeHead(200, {"content-type" : "text/html;charset=utf-8"});
    res.write(data);
    res.end();
}); */

    message = {
        affiche : ["N'oubliez pas de donner votre avis !"],
    };


    res.render("contact", message);
});



module.exports = app;