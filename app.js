const express = require("express");

const url = require('url');

const fs = require('fs');

const app = express();

const mysql2 = require('mysql2');

const myConnection = require("express-myconnection");

const connection = {
    host : "localhost",
    user : "root",
    password : "ch14fz03",
    port : 3306,
    database : "restaurant"
};

// l'endroit où se situe les vues qui s'affichent sur le naviagteur
app.set("views", "./views");

// préciser le moteur de la lecture de vues à savoir esj
app.set("view engine", "ejs");

// précise le répertoire 'public' qui contient le fichier statics
app.use(express.static("public"));

app.use(myConnection(mysql2, connection, "pool"));

// Extraire 
app.use(express.urlencoded({extended: false} ));

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


    res.render("accueil"); 

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

    req.getConnection((erreur, connection) => {
        if(erreur){
            console.log(erreur);
        } else {
            connection.query("SELECT * FROM platrs", [], (err, resultat) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("resultat", resultat);
                    res.render("menu", {resultat});
                }
            });
        };
    });



});

// creé une route avec POST
app.post("/plat", (req, res) => {
    
    res.render("forms");
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