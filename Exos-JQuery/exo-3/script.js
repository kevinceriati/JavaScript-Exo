console.log("exercice 3");


//var projet = ['1', '2', '3', '4'];

$(document).ready(function(){
    $('h1').text("Kevin Debamaco");
    $('#tagline').text('Triple champion du monde de lancer de tronçonneuse');
    $('#myNavbar ul:first-child').hide();
    $('.glyphicon-log-in').removeClass('glyphicon glyphicon-log-in').addClass('glyphicon glyphicon-hand-right');
    $('footer p').text('Copyright 2017').css('font-weight', 'bold').addClass('intro');

    var projet = 1;
    $('#work1 p').each(function (){
        $(this).text('Mon projet '+projet);
        projet++;

    });

   // $('.img-responsive').attr('src', 'image-projet.jpg');

   var img = 1;
   $('.img-responsive').each(function(){
       $(this).attr('src', 'img/' + img + '.jpg').addClass('image');
       img++;
   });

   var $p = $('<p>');
   $p.text('Projet actuel');

   var $lastImg = $('<img>');
   $lastImg.attr('src', 'img/1.jpg').css('height', '450px');

   var $div = $('<div>');

   $div.append($p);
   $div.append($lastImg);
   
   $('#work1').prepend($div);

});


