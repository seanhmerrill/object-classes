let person = {
    name: "Sean",
    age: 23,
    favorites: {
        food: "steak",
        game: "Zelda",
        color: "Red",
        number: 13
    },
    shoppingList: ["Banans", "Apples", "TP", "Milk", "cheese"]
};

//how to access values

//deconstructed

const {name} = person

//dot notation

person.age

//bracket notation

person["age"]

//add key value pair to the object

person.isMarried = true

//remove key value pair

person.age = null
delete person.age