
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;


	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.

	new DnD(canvas, this);


	this.onInteractionStart = function (DnD){
		ctx.clearRect(0,0,canvas.width, canvas.height);
		drawing.paint(ctx);
		currLineWidth = $('#spinnerWidth').val();
		currColour = $('#colour').val();
		if($('#butRect')[0].checked){
			var rec = new Rectangle(DnD.xi-DnD.xf , DnD.yi - DnD.yf , DnD.xi, DnD.yi , currLineWidth, currColour);
		}else{
			var line = new Line(DnD.xi, DnD.yi, 0, 0, currLineWidth, currColour);
		}
	}.bind(this);

	this.onInteractionUpdate= function (DnD){
		ctx.clearRect(0,0,canvas.width, canvas.height);
		drawing.paint(ctx);
		currLineWidth = $('#spinnerWidth').val();
		currColour = $('#colour').val();
		if($('#butRect')[0].checked){
			var rec = new Rectangle(DnD.xf-DnD.xi , DnD.yf - DnD.yi , DnD.xi, DnD.yi , currLineWidth, currColour);
			rec.paint(ctx);
		}else{
			var line = new Line(DnD.xi, DnD.yi, DnD.xf, DnD.yf, currLineWidth, currColour);
			line.paint(ctx);
		}
	}.bind(this);

	this.onInteractionEnd= function (DnD){
		ctx.clearRect(0,0,canvas.width, canvas.height);
		drawing.paint(ctx);
		currLineWidth = $('#spinnerWidth').val();
		currColour = $('#colour').val();
		if($('#butRect')[0].checked){
			var rec = new Rectangle(DnD.xf-DnD.xi , DnD.yf - DnD.yi , DnD.xi, DnD.yi , currLineWidth, currColour);
			drawing.addShape(rec);
			drawing.updateShapeList(rec);
			rec.paint(ctx);
			console.log(rec);

		}else{
			var line = new Line(DnD.xi, DnD.yi, DnD.xf, DnD.yf, currLineWidth, currColour);
			drawing.addShape(line);
			drawing.updateShapeList(line);
			line.paint(ctx);
			console.log(line);

		}
	}.bind(this);
	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
};


