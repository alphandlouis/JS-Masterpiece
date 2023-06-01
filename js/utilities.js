'use strict';

/*************************************************************************************************/
/* *********************************** FONCTIONS UTILITAIRES *********************************** */
/*************************************************************************************************/
function getRandomColor()
{
    //je veux générer 3 couleur aléatoires red green et blue (0,255)
    const red = getRandomInteger(0, 255);
    const blue = getRandomInteger(0, 255);
    const green = getRandomInteger(0, 255);

    //je veux générer une opacité entre 0 et 1
    const opacity = Math.random();
    //je retourne ma couleur rgba (concaténation)
    return 'rgba('+ red +', '+ green +', '+ blue +', '+ opacity +')';
}

function getRandomInteger(min, max)
{
    // Renvoie un nombre entier aléatoire compris entre les arguments min et max inclus.
    return Math.floor(Math.random() * (max - min + 1)) + min;
}