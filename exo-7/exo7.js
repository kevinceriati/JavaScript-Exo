console.log("exo-7");

console.log(jsonDatas);

var requestType = [];


function traduction() {

    jsonDatas.forEach(function (objet) {       //   Fonction qui parcout json.data et qui à chaque tour de boucle rentre les données dans "objet' avec la fonction(objet). 
        for (var propriete in typeProduct) {  //   Ensuite on parcours typeProduct et on créer pour chaque type une clef nommée "propriete".
            if (propriete === objet.type) {   //   On vérifie que la valeur de la clef propriete est égal à la valeur de l'objet "objet.type".
                objet.typeTraduct = typeProduct[propriete];   //   Si oui, on remplace sa valeur par celle correspondante du "typeProduct".
            }
        }
    });
}

function searching() {
    console.clear();
    requestType = [];    // je réinitialise le tableau !!!

    var objSearching = document.getElementById('searchInput').value;
    var objOnStock = document.getElementById('checkInput').checked;

    jsonDatas.forEach(function (item) {
        if ((objSearching === item.type || objSearching === item.typeTraduct) && objOnStock === true) {
            requestType.push(item);
        }

        else if ((objSearching === item.type || objSearching === item.typeTraduct) && objOnStock === false && item.quantity > 0) {
            requestType.push(item);
        }
    });

    sortBy(requestType);
}

function sortBy(requestType) {

    var sortRequest = document.getElementById('dropdown').value;

    if (sortRequest === '1') {
        requestType.sort(function (a, b) {
            return (a.name).localeCompare(b.name);

        });
    } else if (sortRequest === '2') {
        requestType.sort(function (a, b) {
            return (b.name).localeCompare(a.name);
        });
    } else if (sortRequest === '3') {
        requestType.sort(function (a, b) {
            return (a.price)-(b.price);
        });
    } else if (sortRequest === '4') {
        requestType.sort(function (a, b) {
            return (b.price)-(a.price);
        });
    }
    console.log(requestType)
}


function addObj () {

     var newItem = {};

     newItem.name = document.getElementById('addNameInput').value;;               // =>  newItem.name = document.getElementById('addNameInput').value;
     newItem.type = document.getElementById('addTypeInput').value;;
     newItem.description = document.getElementById('addDescriptionInput').value;;
     newItem.price = document.getElementById('addPriceInput').value;;
     newItem.quantity = document.getElementById('addQuantityInput').value;   

     jsonDatas.push(newItem);
  
     console.log(jsonDatas);
} 

  
   //...push




console.log(traduction());
