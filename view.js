
// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.
Rectangle.prototype.paint = function(ctx) {
    ctx.beginPath();
    ctx.rect(this.phgx, this.phgy, this.largeur ,this.hauteur);
    ctx.lineWidth = this.epaisseur;
    ctx.strokeStyle = this.couleur;
    ctx.stroke();
};

Line.prototype.paint = function(ctx) {
    ctx.beginPath();
    ctx.moveTo( this.dx,  this.dy);
    ctx.lineTo( this.fx,  this.fy);
    ctx.lineWidth = this.epaisseur;
    ctx.strokeStyle = this.couleur;
    ctx.stroke();
};


Drawing.prototype.paint = function(ctx) {
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.tabForm.forEach(function(eltDuTableau) {
        eltDuTableau.paint(ctx);
    });
};

Drawing.prototype.updateShapeList = function(shape){

    var list = document.getElementById('shapeList');
    var li = document.createElement('li');
    var id = list.childNodes.length;
    var bouton = document.createElement('button');
    var span = document.createElement('span');

    bouton.setAttribute('id', id);
    bouton.setAttribute('class','btn btn-default')
    span.setAttribute('class','glyphicon glyphicon-remove-sign');
    bouton.appendChild(span);

    bouton.setAttribute('onClick', 'drawing.deleteShape('+id+')');
    li.appendChild(bouton);

    if (shape instanceof Rectangle){
        li.appendChild(document.createTextNode('Rectangle' +'('+ shape.phgx+','+shape.phgy+','+shape.largeur+','+shape.hauteur+')'));

    } else if(shape instanceof Line){
        li.appendChild(document.createTextNode('Ligne' +'('+  shape.dx +','+shape.dy +','+shape.fx+','+shape.fy+')'));
    }

    li.setAttribute('id', 'li'+id);
    li.setAttribute('class', 'list-group-item');

    list.appendChild(li);
};

Drawing.prototype.deleteShape = function(id){

    var li = document.getElementById('li'+id);

    var index = $(li).index();

    li.remove();

    this.removeShape(index);

    ctx.clearRect(0,0,canvas.width,canvas.height);
    drawing.paint(ctx);
};