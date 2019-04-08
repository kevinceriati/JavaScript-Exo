console.log('exercice 1');

/*   Différences entre Javascript et jQuery.

jQuery et Javascript sont deux languages servant principalement à ajouter des éléments interactifs dans un site internet.
La différence c'est que jQuery est un framework qui permet d'écrire du Javascript plus rapidement et plus facilement. 
En effet jQuery condense les tâches Javascript courante en moins de lignes de code et de révelle donc être un réel gain temps et d'efficacité pour les développeurs.*/

$(document).ready(function(){     
	console.log('Je peux maintenant écrire du code JQuery');
});

/* Ici le jQuery fait : sur la page, utilise la fonction ready qui affiche simplement un texte dans la console.

cette ligne n'est pas du tout indispensable puisque cette fonction ne sert à rien, le console.log seul donnerait le même résutlat.

Le sympbole nous permettant de repérer le Javascript et le jQuery est le $   */