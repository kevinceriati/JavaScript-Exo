console.log("exo-7");

//console.log(jsonDatas);

var requestType = [];
var contact = [];


function traduction() {

    jsonDatas.forEach(function (categorie) {                                                         //   Fonction qui parcout json.data et qui à chaque tour de boucle rentre les données dans "objet' avec la fonction(objet). 
        for (var propriete in typeProduct) {                  //   Ensuite on parcours typeProduct et on créer pour chaque type une clef nommée "propriete".
            if (propriete === categorie.type) {                   //   On vérifie que la valeur de la clef propriete est égal à la valeur de l'objet "objet.type".
                categorie.typeTraduct = typeProduct[propriete];   //   Si oui, on remplace sa valeur par celle correspondante du "typeProduct".
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
        item.items.forEach(function(genre){

        if ((objSearching === item.type || objSearching === item.typeTraduct) && objOnStock === true) {
            requestType.push(genre);
        }

        else if ((objSearching === item.type || objSearching === item.typeTraduct) && objOnStock === false && genre.quantity > 0) {
            requestType.push(genre);
        }
    })
    });
console.log(requestType);
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
    //console.log(requestType)
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


function showContact(){

   jsonDatas.forEach(function(categorie){
       categorie.items.forEach(function(item){
        console.log(item.contact);
       })
   })

}


//console.log(traduction());
//showContact();