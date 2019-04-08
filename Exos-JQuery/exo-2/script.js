console.log('exercice 2');

 
/* Titre du blog : */
$("#title");

/* Element du sidemenu de gauche : */ 
$('#sidenav');

/* Footer : */
$('footer');

/* Barre de recherche : */




$(document).ready(function(){     
    console.log($("#title").text());      /* Titre du blog */
    console.log($('.sidenav')[0]);        /* Element du sidemenu de gauche */ 
    console.log($('footer')[0]);          /* Footer */
    console.log($(".input-group")[0]);    /* Barre de recherche */
    console.log($(".glyphicon"));         /* Tous les glyphicon */
    console.log($(".label-success"));     /* Tous les label vert */
    console.log($(".article"));           /* Tous les paragraphe article */
    console.log($(".glyphicon-time"));    /* Tous les glyphicon */
    console.log($(".sidenav li:first"));  /* Premier élement du sidemenu */
    console.log($("p:odd"));              /* Un paragraphe sur 2 */
});

 
