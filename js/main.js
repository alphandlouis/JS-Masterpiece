'use strict';

// *************************************************************************
// **************************** Variables globales *************************
// *************************************************************************
let canvas;
let context;


// *************************************************************************
// ********************************* Fonctions *****************************
// *************************************************************************
function getMouseLocation(event)
{
    console.log("mon click", event)
    // Récupération de l'offset du canvas (sa position par rapport à la zone d'affichage, le viewport) getBoundingClientRect
    const offset = canvas.getBoundingClientRect();
    // Récupération des propriétés CSS calculées pour l'élément canvas et récupération des bordures getComputedStyle
    const styles = window.getComputedStyle(canvas);
    /**
     * Construction des coordonnées du clic (x,y) par rapport à l'origine du canvas
     * Des coordonnées de la souris par rapport au viewport (event.clientX, event.clientY) on soustrait :
     *  -> l'offset de l'élément canvas, c'est-à-dire l'espace autour du canvas jusqu'au bord de la fenêtre
     *  -> l'épaisseur des bordures du canvas
     */
     const location = {
        x: event.clientX - offset.left - parseInt(styles.borderLeftWidth),
        y: event.clientY - offset.top - parseInt(styles.borderTopWidth)
    };
    
     // Retour du résultat
     return location

}

function onClickCanvas(event)
{
    // Récupération de la position du clic (appel de fonction)
    const location = getMouseLocation(event);
    // Génération aléatoire de la taille du disque et de sa couleur
    const radius = getRandomInteger(10,50);
    const color = getRandomColor();
    
    // Création d'un objet Disk
    const disk = new Disk();
    // Configuration des caractéristiques du disque
    disk.setRadius(radius);
    disk.setPosition(location);
    disk.setColor(color);
    
    // On dessine le disque
    disk.draw(context)
}

// *************************************************************************
// ********************************* Code principal ************************
// *************************************************************************
document.addEventListener('DOMContentLoaded', function(){

    // Sélection de l'élément canvas
    canvas = document.querySelector('#masterpiece');
    // Sélection du "contexte" 2D qui va servir à dessiner
    context = canvas.getContext('2d');
    // Installation du gestionnaire d'événement au clic sur le canvas
    canvas.addEventListener('click', onClickCanvas);
})