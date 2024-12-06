CREATE TABLE chanteur (
    id INT PRIMARY KEY AUTO_INCREMENT, 
    nom VARCHAR(100), 
    role VARCHAR(155) );

    CREATE TABLE chanson (
        id INT PRIMARY KEY AUTO_INCREMENT,
         titre VARCHAR(155), 
         date_sortie DATE, 
         id_chanteur INT, 
         FOREIGN KEY (id_chanteur) REFERENCES chanteur(id) );

INSERT INTO chanteur (nom, role) 
    VALUES ('NINHO', 'chanteur, compositeur');   

INSERT INTO chanson (titre, date_sortie, id_chanteur) 
    VALUES ('Mood', '2023-12-06', 2);

    SELECT * FROM chanteur;

     SELECT * FROM chanson;