var firstName = "Рассел";
var lastName = "Эйк";
var nickName = "Расти";

console.log(nickName);

var personArray = ["Рассел", "Эйк", "Расти"];

console.log(personArray[2]);

var personObject = {
    firstName: "Рассел",
    lastName: "Эйк",
    nickName: "Расти",
    sayHello: function Hello() {
        alert(personObject.nickName + " " + personObject.lastName);
    }
};

console.log(personObject.nickName);

personObject.sayHello();

var personObjectTwo = {
    firstName: "Кен",
    lastName: "Рикардо",
    nickName: "Ки",
    sayHello: function Hello() {
        console.log("It's me, " + personObjectTwo.lastName);
    }
};

personObjectTwo.sayHello();
