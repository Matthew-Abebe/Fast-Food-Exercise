// // Invoke the function to return the list of all orders

// // Output all orders to the console using console.table()
// console.table(chickenComboMeal)

// You need to write code to represent the process of ordering food at a fast food joint. Your restaurant is Bob's Burgers, and you have some starter code below. The object will have two behaviors that you must define.

// The object should have a property named orders that is an array. You will need to define this.

// Define a function to represent the behavior of placing an order. It should accept one argument named meal. This argument will be an object. There is starter code provided.

// Define a function to represent the behavior of getting all orders. It should return the order property (hint: this). You will need to define this.

// Each meal object should have three properties: sandwichType, fries (true or false), and drinkSize.


const restaurant = {
    name: "Bob's Burgers",
    orders: [],
    placeOrder: function (meal) {
        this.orders.push(meal)
    }
}

const chickenComboMeal = {
    sandwichType: "chicken sandwich",
    fries: "medium",
    drinkSize: "large"
}

// Place an order
restaurant.placeOrder()

// Invoke the function to return the list of all orders

// Output all orders to the console using console.table()
console.table(chickenComboMeal)