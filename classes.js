
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.favorites = {};
        this.shoppingList = [];
        this.isMarried = false;
    }

    gotMarried = (spouse) => {
        if (this.age > 18) {
            this.isMarried = true;
            this.spouse = spouse;
            console.log(`Happily Ever After ${this.name} & ${spouse}`)
        }
        else {
            console.log(`You're not old enough for that`)
        }
    };

    birthday = () => {
        this.age++;
        console.log('Happy Cake Day')
    }

    addToShoppingList = (item) => {
        this.shoppingList.push(item)
    }

    addFav = (key, value) => {
        this.favorites[`${key}`] = value
    }

}

class Baby extends Person {
    constructor(name, age, naptime) {
        super(name, age)
        this.toys = [];
        this.naptime = naptime;
    }

    changeNaptime = (time) => {
        this.naptime = time
        console.log(`${this.name} new nap time is now ${time}`)
    }

    newToy = (toy) => {
        this.toys.push(toy)
        console.log(this.toys)
    }

}

const sean = new Person ("Sean", 23)

const baby1 = new Baby ("Tim", 0, 1)

baby1.changeNaptime(2)
baby1.gotMarried("Jenni")

// sean.birthday()
// sean.gotMarried("Savannah")
// sean.addToShoppingList("oranges")
// sean.addFav("food", "sushi")

// console.log(sean)