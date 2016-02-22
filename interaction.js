
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
    // Définir ici les attributs de la 'classe'

    this.xi = 0;
    this.yi = 0;
    this.xf = 0;
    this.yf = 0;
    this.test = false;

	// Developper les 3 fonctions gérant les événements

    this.onDown = function(e) {
        if (!this.test) {
            var coord = getMousePosition(canvas, e);
            this.xi = coord.x;
            this.yi = coord.y;
          //  console.log("ONCLICK : Coordonnées : [" + coord.x + "," + coord.y + "]");
            pencil.onInteractionStart(this);
            this.test = true;
        }
    }.bind(this);

    this.onMove = function(e){
        if(this.test) {
            var coordMove = getMousePosition(canvas, e);
            this.xf = coordMove.x;
            this.yf = coordMove.y;
          //  console.log("Ca bouge : Coordonnées : [" + coordMove.x + ',' + coordMove.y + "]");
            pencil.onInteractionUpdate(this);
        }
    }.bind(this);

    this.onUp = function(e) {
        if(this.test) {
            var coordRelease = getMousePosition(canvas, e);
            this.xf = coordRelease.x;
            this.yf = coordRelease.y;
       //     console.log("RELEASE : Coordonnées : [" + coordRelease.x + "," + coordRelease.y + "]");
            pencil.onInteractionEnd(this);
            this.test = false;
        }
    }.bind(this);

	// Associer les fonctions précédentes aux évènements du canvas.
    canvas.addEventListener('mousedown', this.onDown, false);
    canvas.addEventListener('mousemove', this.onMove, false);
    canvas.addEventListener('mouseup', this.onUp, false);
};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



