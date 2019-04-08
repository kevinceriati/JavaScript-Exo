console.log("exo-7-bonus");

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
        item.items.forEach(function (genre) {

            if ((objSearching === item.type || objSearching === item.typeTraduct) && objOnStock === true) {
                genre.type = item.type;
                requestType.push(genre);

            }

            else if ((objSearching === item.type || objSearching === item.typeTraduct) && objOnStock === false && genre.quantity > 0) {
                genre.type = item.type;
                requestType.push(genre);
            }
        })
    });
    sortBy(requestType);
    console.log(requestType);

}

function sortBy(requestType) {

    //document.getElementsByTagName('tbody').innerHTML + "";

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
            return (a.price) - (b.price);
        });
    } else if (sortRequest === '4') {
        requestType.sort(function (a, b) {
            return (b.price) - (a.price);
        });
    }
    addDatas(requestType);
}


function addObj() {

    var newItem = {};
    newItem.contact = {};

    newItem.name = document.getElementById('addNameInput').value;              // =>  newItem.name = document.getElementById('addNameInput').value;
    //newItem = document.getElementById('addTypeInput').value;
    newItem.description = document.getElementById('addDescriptionInput').value;
    newItem.price = document.getElementById('addPriceInput').value;
    newItem.quantity = document.getElementById('addQuantityInput').value;
    newItem.contact.lastName = document.getElementById('addLastNameInput').value;
    newItem.contact.firsName = document.getElementById('addFirstNameInput').value;
    newItem.contact.address = document.getElementById('addAddressInput').value;

    jsonDatas.forEach(function (categorie) {
        if (categorie.type === newItem.type){
        categorie.items.push(newItem);
        }


    });

    
    console.log(jsonDatas);
}


function showContact() {

    jsonDatas.forEach(function (categorie) {
        categorie.items.forEach(function (item) {
            console.log(item.contact);
        })
    })

}

function addDatas(requestType) {

    var sortDatas = document.getElementsByTagName('tbody');;
    var table = sortDatas[0];
    table.innerHTML = "";
    console.log(requestType);
    requestType.forEach(function (item) {

        var tr = document.createElement('tr');

        for (var propriete in item) {
            if (propriete != 'contact') {
                var td = document.createElement('td');
                var content = document.createTextNode(item[propriete]);
                td.appendChild(content);
                tr.appendChild(td);
            }
        }

        for (var info in item.contact) {
            var td2 = document.createElement('td');
            var content2 = document.createTextNode(item.contact[info]);
            td2.appendChild(content2);
            tr.appendChild(td2);
        }

        table.appendChild(tr);

        // var td1 = document.createElement('td');
        // var td2 = document.createElement('td');
        // var td3 = document.createElement('td');
        // var td4 = document.createElement('td');
        // var td5 = document.createElement('td');

        // var content1 = document.createTextNode(item.name);
        // var content2 = document.createTextNode(item.description);
        // var content3 = document.createTextNode(item.type);
        // var content4 = document.createTextNode(item.price);
        // var content5 = document.createTextNode(item.quantity);

        // td1.appendChild(content1);
        // td2.appendChild(content2);
        // td3.appendChild(content3);
        // td4.appendChild(content4);
        // td5.appendChild(content5);

        // tr.appendChild(td1);
        // tr.appendChild(td2);
        // tr.appendChild(td3);
        // tr.appendChild(td4);
        // tr.appendChild(td5);
    })
}

//console.log(traduction());
//showContact();