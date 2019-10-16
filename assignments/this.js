/* The for principles of "this"; 
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global/Window Binding = When in the global scope & if no rules apply (functions/methods) then it applies to the whole Window and has a thing called strict rule that can be implemented to prevent the window from binding.
* 2. Implicit Binding =Its automatic & the most common. The function is called by the proceeding(to the left) dot object. Applies to objects with methods. 
* 3. New Binding = Constructs a new object
* 4. Explicit Binding = can override previous objects 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function greet(name){
    console.log('Hello ' + name);
    console.log(this);
}
greet('Lisa Example 1');


// Principle 2

// code example for Implicit Binding

let greetMe ={
    greeting: 'Hi ',
    speak: function(name){
        console.log(this.greeting + name);
        console.log(this);
    }
}
greetMe.speak('Lisa Example 2')


// Principle 3

// code example for New Binding

function GreetMe(name) {
    this.greeting = 'Hi ';
    this.name = name;
    this.speak = function() {
        console.log(this.greeting + this.name);
       console.log(this);
    }
};

GreetMe.prototype.sayGoodbye = function() {
    console.log('Good bye ' + this.name);
    console.log(this);
};


let greetLisa = new GreetMe('Lisa');
let greetLucas = new GreetMe('Lucas');

greetLisa.speak();
greetLucas.speak();


// Principle 4

// code example for Explicit Binding


greetLisa.sayGoodbye.call(greetLucas);
greetLucas.sayGoodbye.call(greetLisa);