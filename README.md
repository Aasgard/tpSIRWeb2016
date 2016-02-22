#TP Web : HTML5 et Javascript

##Objectif

Le but de ce TP est de créer une architecture MVC en Javascript qui permet, au final, de créer des formes (Rectangles et Lignes) sur un canvas HTML5.

###Classes

####View.js

La vue dans le modèle MVC est chargée de retranscrire les informations calculées à l'utilisateur. Les formes sur le canvas seront dessinées par l'utilisateur.

###Model.js

Le modèle permet de défnir une structure pour nos objets de dessin. L'objet Drawing permet de stocker les formes crées, et Forme est la classe parente des classes Rectangle et Ligne.

###Controller.js

Le contrôleur faire le lien entre le(s) modèle(s) et la(les) vue(s). Les Formes sont dessinées grâce a des composants listener chargés d'écouter les actions effectuées sur le canvas HTML5. Ainsi, quand l'utilisateur, commence à dessiner une forme, les coordonnées et départ sont retenues, au déplacement de la souris, ces coordonnées sont mises-à-jour en temps réel. Et enfin, la dnerière méthode (onInteracionEnd), permet d'enrregistrer les coordonnées de fin, mais aussi d'enregistrer la forme fraîchement créée dans un tableau de Formes (Model.js)

###Interaction.js

Cette classe permet de gérer les évènements sur le Canvas (onMouseDown, onMouseMove, onMouseUp).
