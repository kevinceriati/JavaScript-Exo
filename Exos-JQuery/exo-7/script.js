console.log("exercice 7");
var desc = false;
$(document).ready(function () {
  $("#searchBar").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#paging tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
  build();
  paging();

  function addLineToTable(objet) {
    var $row = $('<tr>');
    var $columnEmail = $('<td>');
    var $columnLast = $('<td>');
    var $columnFirst = $('<td>');
    var $columnTel = $('<td>');

    $columnEmail.text(objet.email);
    $columnFirst.text(objet.name.first);
    $columnLast.text(objet.name.last);
    $columnTel.text(objet.phone);

    $columnEmail.appendTo($row);
    $columnLast.appendTo($row);
    $columnFirst.appendTo($row);
    $columnTel.appendTo($row);
    $row.appendTo('tbody');
  }

  function build() {
    data.forEach(function (objet) {
      addLineToTable(objet);
    });
  }

  function paging() {
    $('#paging').each(function () {
      var currentPage = 0;
      var numPerPage = 50;
      var $table = $(this);
      $table.bind('repaginate', function () {
        $table.find('tbody tr').hide().slice(currentPage * numPerPage, (currentPage + 1) * numPerPage).show();
      });
      $table.trigger('repaginate');
      var numRows = $table.find('tbody tr').length;
      var numPages = Math.ceil(numRows / numPerPage);
      var $pager = $('<div></div>');
      $pager.attr('class', 'pager d-flex justify-content-center');
      $('.pager').html('');
      for (var page = 0; page < numPages; page++) {
        $('<span class="page-number"></span>').text(page + 1).bind('click', {
          newPage: page
        }, function (event) {
          currentPage = event.data['newPage'];
          $table.trigger('repaginate');
          $(this).addClass('active').siblings().removeClass('active');
        }).appendTo($pager).addClass('clickable');
      }
      $pager.insertBefore($table).find('span.page-number:first').addClass('active');
    });
  }
  
function sort(colChoice) {
  $("tbody").find('tr').sort(function (a, b) {
      var a1 = $(colChoice, a).text();
      var b1 = $(colChoice, b).text();
          if (desc) {
            var result = b1.localeCompare(a1);
            return result;
          } else {
            var result = a1.localeCompare(b1);
            return result;
          }
        }).appendTo('tbody');
       desc = !desc;
        paging();
    }
  $('#alphaOrder').on('click', function () {
   colChoice = 'td:first + td'
    sort(colChoice);
  })
  $('#alphaOrderFirst').on('click', function () {
    colChoice = 'td:first + td + td'
    sort(colChoice);
  })
  $('#alphaOrderMail').on('click', function () {
    colChoice = 'td:first'
    sort(colChoice);
  })
  $('#numericOrder').on('click', function () {
    colChoice = 'td:first + td + td + td'
     sort(colChoice);
   })
   $('#sub').on('click', function () {
    addItem();
   })
   function addItem (){
    var newItem = {};
  
    newItem.email = $('#emailInput').val();;
    newItem.name = {}; 
    newItem.name.last = $('#lastNameInput').val();
    newItem.name.first = $('#firstNameInput').val();
    newItem.phone = $('#phoneInput').val();
    data.push(newItem);
    $('tbody > tr').remove();
    build();
    paging();    
  }
});


// function showData($page) {

//   $('tbody').empty(); 
//   $page = parseInt($page) - 1; 
//   var $start = $page * 50; 
//   var $end = $start + 50;
//   for (let i = $start; i < $end; i++) { 
//     var object = data[i]; 
//     addLineToTable(object); 
//   }

//  }function pagi() {

//   var $div= $("<div>").attr("class", "d-flex justify-content-center");
//   $div.insertAfter($(".table")); 
//   var itemsShow = 50;
//   var nbrItems = data.length; 
//   var nbgPages = Math.ceil(nbrItems / itemsShow);
//   for (let i = 1; i <= nbgPages; i++) { 
//     var $button = $("<button>").attr({"type": "button", "class": "btn btn-light"}).text(i); 
//     $div.append($button) 
//   } 
//   $("button").on("click", function () { 
//     var $page = $(this).text()
//     showData($page) 
//   });
//  }