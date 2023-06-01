class Disk {

    // Création du constructeur
    constructor() {
        // Définition des propriétés et de leurs valeurs par défaut couleur radius et une position (objet)
        this.color = 'black';
        this.radius = 10;
        this.position = {x: 0, y: 0};
    }
    /**
     * Change la valeur de la propriété radius
     * @param {number} radius
     */
    setRadius(radius) {
        this.radius = radius
    }
    
    /**
     * Change la valeur de la propriété color
     * @param {string} color
     */
    setColor(color) {
        this.color = color
    }
    
    /**
     * Change la valeur de la propriété position
     * @param {Object} position Un objet possédant les propriétés x et y
     */
    setPosition(position) {
        this.position = position
    }
    
    /**
     * Dessine le disque sur un canvas dont le contexte est donné en paramètre
     * @param context Le contexte du canvas sur lequel on souhaite dessiner le disque
     */
    draw(context) {
        // Sauvegarde du contexte
        context.save()
        // Mise à jour de la couleur de remplissage
        context.fillStyle = this.color;
        // Tracé du disque
        context.beginPath();
        context.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
        context.fill();
        // Restauration du contexte
        context.restore();
    }
}