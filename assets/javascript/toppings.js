// This file contains a comprehensive list of pizza toppings
// Each topping will be stored as an object with relevant properties
// The topping objects will be stored in an array

// Toppings array declaration
let toppings = [];

// Topping class declaration
class Topping {
    constructor(name, symbol, isPremium, type, isAvailableAsSide) {
        this.name = name;
        this.symbol = symbol;
        this.isPremium = isPremium;
        this.isAvailableAsSide = isAvailableAsSide;
        if (type === 0) {this.type = "sauce"}
        else if (type === 1) {this.type = "meat"}
        else if (type === 2) {this.type = "vegetable"}
        else if (type === 3) {this.type = "cheese"}
        else if (type === 4) {this.type = "other"}
    }
}

// Creating individual topping objects and pushing them to the array
toppings.push(new Topping("Pepperoni", "P", false, 1, false));
toppings.push(new Topping("Italian Sausage", "S", false, 1, false));
toppings.push(new Topping("Beef", "B", false, 1, false));
toppings.push(new Topping("Ham", "H", false, 1, false));
toppings.push(new Topping("Bacon", "K", false, 1, false));
toppings.push(new Topping("Mushrooms", "M", false, 2, false));
toppings.push(new Topping("Onions", "O", false, 2, false));
toppings.push(new Topping("Green Peppers", "G", false, 2, false));
toppings.push(new Topping("Black Olives", "R", false, 2, true));
toppings.push(new Topping("Picante Sauce", "(F)", false, 0, true));
toppings.push(new Topping("Banana Peppers", "N", false, 2, true));
toppings.push(new Topping("Jalapenos", "J", false, 2, true));
toppings.push(new Topping("Anchovies", "A", false, 1, false));
toppings.push(new Topping("Sliced Tomatoes", "T", false, 2, false));
toppings.push(new Topping("BBQ Sauce", "Q", false, 0, true));
toppings.push(new Topping("Cream Cheese", "(E)", false, 3, false));
toppings.push(new Topping("Pineapple", "Z", false, 2, true));
toppings.push(new Topping("Green Olives", "V", false, 2, true));
toppings.push(new Topping("Minced Garlic", "(G)", false, 4, false));
toppings.push(new Topping("Wing Sauce", "(Otts)", false, 0, true));
toppings.push(new Topping("Ranch Dressing", "(R)", false, 0, false));
toppings.push(new Topping("Chicken", "W", true, 1, false));
toppings.push(new Topping("Spinach", "I", true, 2, false));
toppings.push(new Topping("Red Peppers", "D", true, 2, true));
toppings.push(new Topping("Feta Cheese", "L", true, 3, false));
toppings.push(new Topping("Parmesan", "(P)", true, 3, false));