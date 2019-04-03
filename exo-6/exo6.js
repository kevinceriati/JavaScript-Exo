// Partie 8 code academy
console.log("exo-6");

// commenter cette ligne de code.
/*var joeInfo = {
    name: "Joe's house",
    rooms: 5,
    garage: true,
    bathrooms: 1,
    cars: ['Clio', 'Van'],
};

console.log*/
// afficher le nombre de voitures de Joe

// changer le nombre de salle de bains de Joe : il n'en possède au'une.

// Joe vient d'acquérir un garage changer la structure pour le refléter.

var team = {
    _player: [
        {
            firstName: 'Pablo',
            lastName: 'Sanchez',
            age: 11
        }
    ],

    _games: [{
        opponent: 'Annecy',
        teamPoints: 42,
        opponentPoints: 27
    }],

};

function addPlayer(firstName, lastName, age) {
    var player = {};
    player.firstName = firstName;
    player.lastName = lastName;
    player.age = age;

    team._player.push(player)
}

function addGames(opponent, teamPoints, opponentPoints) {
    var games = {};
    games.opponent = opponent;
    games.teamPoints = teamPoints;
    games.opponentPoints = opponentPoints;

    team._games.push(games)
}


addPlayer('Patoche', 'Lebauf', 40);
addPlayer('Gill', 'Lermite', 75);
addPlayer('Regis', 'Bourg', 32);
addPlayer('Douglas', 'Nugget', 24);

addGames('Annecy', 45, 24);
addGames('Broncos', 74, 12);
addGames('Denver', 32, 41);
addGames('Wagadougou', 53, 18);

console.log(team);

function sum() {
    var point = 0;
    team._games.forEach(game => {
        point = game.teamPoints + point;
    });
    return point;
}

function average() {
    var point = 0;
    var average = 0;

    var nombreDeMatch = team._games.length;

    team._games.forEach(game => {
        point = game.opponentPoints + point;

    })

    average = point / nombreDeMatch;
    return average;
}

function older() {
    var older = [];
    var agePlayer = 0;

    team._player.forEach(function (player) {
        if (player.age > agePlayer) {
            agePlayer = player.age;
            older.push(player);
        }

    });
    console.log(older[older.length - 1]);
    //console.log(agePlayer);
}


function sort() {

    //team._player = team._player.sort();
    team._player.sort(function (a, b) {

        return a.lastName.localeCompare(b.lastName);
    });
    console.log(team._player);
}



console.log(sum());
console.log(average());
older();
sort();
