// Characters
var charactersArray = [];
var roomsArray = [];
var weaponsArray = [];


//CHaracters constructions
function Characters(first_name, last_name, color, description, age, image, occupation) {
  this.first_name=first_name;
  this.last_name=last_name;
  this.color=color;
  this.description=description;
  this.age=age;
  this.image=image;
  this.occupation=occupation;

  this.addToArray = function(char) { //method to add characters in to array
    charactersArray.push(char);
  },
  this.addToArray(this); //this represents specific character
  this.randomSelector = function() {
    return this[Math.floor(Math.random() * this.length)];
}
}

var mrGreen = new Characters("Jacob", "Green", "green", "He has a lot of connections", "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg", "Entrepreneur")
  console.log(mrGreen);
  // mrGreen.addToArray(mrGreen)
var drOrchid = new Characters("Doctor", "Orchid", "white", "PhD in plant toxicology. Adopted daughter of Mr. Boddy", "http://www.radiotimes.com/uploads/images/Original/111967.jpg", "Scientist")
var profPlum = new Characters("Victor", "Plum", "purple", "Billionare video game designer", "22", "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg", "Designer")
var misScarlet = new Characters("Kasandra", "Scarlet", "red", "She is an A-list movie star with a dark past", "31", "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg", "Actor")
var mrsPeacock = new Characters("Eleanor", "Peacock", "blue", "She is from a wealthy family and uses her status and money to earn popularity", "36", " https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg", "Socialité")
var mrMustard = new Characters("Jack", "Mustard", "yellow", "He is a former football player who tries to get by on his former glory", "62", "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg", "Retired Football player")

// weapons constructor
function Weapons(name, weight) {
  this.name=name;
  this.weight=weight;
  this.addToArray = function(weap) {
    weaponsArray.push(weap);
  }
  this.addToArray(this);
}
var rope = new Weapons("rope", 10);
var knife = new Weapons("knife", 8);
var candlestick = new Weapons("candlestick", 2);
var dumbbell = new Weapons("dumbbell", 30);
var poison = new Weapons("poison", 2);
var axe = new Weapons("axe", 15);
var bat = new Weapons("bat", 13);
var trophy = new Weapons("trophy", 25);
var pistol = new Weapons("pistol", 20);

//rooms constructor
function Rooms (name) {
  this.name=name;
  this.addToArray = function(room) {
    roomsArray.push(room);
  }
  this.addToArray(this);
}
var dinningRoom = new Rooms("Dinning Room");
var conservatory = new Rooms("Conservatory");
var kitchen = new Rooms("Kitchen");
var study = new Rooms("Study");
var library = new Rooms("Library");
var billiardRoom = new Rooms("Billiard Room");
var lounge = new Rooms("Lounge");
var ballroom = new Rooms("Ballroom");
var hall = new Rooms("Hall");
var spa = new Rooms("Spa");
var livingRoom = new Rooms("Living Room");
var observatory = new Rooms("Observatory");
var theater = new Rooms("Theater");
var guestHouse = new Rooms("Guest House");
var patio = new Rooms("Patio");





// Characters Collection
// charactersArray.push(dinningRoom)
console.log(charactersArray)
// Rooms' Collection
console.log(roomsArray)
// Weapons Collection
console.log(weaponsArray)

//Random elemnets


function Game(charactersArray, weaponsArray, roomsArray){

  this.randomSelector = function (arr) {
    let randomI = Math.floor(Math.random() * arr.length);
    return arr[randomI];
  }
  this.characters = charactersArray;
  this.weapons = weaponsArray;
  this.rooms = roomsArray;
  this.misteryEnvelope = []
  // this.character = this.randomSelector(charactersArray);
  // this.weapon = this.randomSelector(weaponsArray);
  // this.room = this.randomSelector(roomsArray);


 this.pickMistery = function() {
   let mistery =  {
        character : this.randomSelector(this.characters),
        weapon : this.randomSelector(this.weapons),
        room : this.randomSelector(this.rooms)
    }

    this.misteryEnvelope = mistery
    return mistery
  }
  this.revealMistery = function (array) {
    // let misteryEnvelope = this.misteryEnvelope;
    return this.misteryEnvelope.character.first_name + " " + this.misteryEnvelope.character.last_name + " killed Mr.Smith using the " + this.misteryEnvelope.weapon.name + " in the " + this.misteryEnvelope.room.name + "!!!!";
    };
}

// console.log(Game(charactersArray, weaponsArray, roomsArray));
var game = new Game(charactersArray, weaponsArray, roomsArray);


console.log(game.pickMistery().character);
console.log(game.pickMistery().weapon);
console.log(game.pickMistery().room);



console.log(game.revealMistery());


//var misteryObj = game.pickMistery();
//console.log(misteryObj.character.first_name);




