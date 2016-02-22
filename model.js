function Forme(epaisseur, couleur){
    this.epaisseur = epaisseur;
    this.couleur = couleur;
};

function Drawing(){
    this.tabForm = [];
    this.addShape = function(shape){
        this.tabForm.push(shape);
    };
    this.removeShape = function(id){
        this.tabForm.splice(id,1);
    };
};

function Rectangle(largeur,hauteur, phqx, phqy, epaisseur, couleur ){
    Forme.call(this ,epaisseur, couleur);
    this.largeur = largeur;
    this.hauteur = hauteur;
    this.phgx = phqx;
    this.phgy = phqy;
};
Rectangle.prototype = new Forme();

function Line(dx, dy,fx, fy, epaisseur, couleur){
    Forme.call(this, epaisseur, couleur);
    this.dx = dx;
    this.dy = dy;
    this.fx = fx;
    this.fy = fy;
};
Line.prototype = new Forme();