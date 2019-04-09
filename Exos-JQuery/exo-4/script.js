console.log("exercice 4");


$(document).ready(function () {



    $('.btn-danger').click(function () {
        var $mail = $('input').val();
        window.alert('Merci ' + $mail);
    });
    


    $('.navbar-nav a:eq(1)').on('dblclick', function () {
        $(this).hide();
    });



    $('img').on('click', function () {
        var $achat = parseInt($(this).closest('.panel').children('.panel-footer').text().replace(/[^\d]/g, ""));
        var $glyph = $('.glyphicon-shopping-cart');
        var $li = $('.glyphicon-shopping-cart').parent();
        var $quantity = parseInt($("a:contains('Cart')").text().replace(/[^\d]/g, ""));
        var $total = ($quantity > 0) ? $achat + $quantity : $achat;
        $li.text('Cart' + $total);
        $li.prepend($glyph);
    })




    $('img').on('mouseenter', function () {
        var article = $(this).closest('.panel').children('.panel-footer').text();
        //console.log('L\'utilisateur regarde ' + article);
    });

    $('form input').on('keydown', function () {
        console.log($('form input').val());

    });



});