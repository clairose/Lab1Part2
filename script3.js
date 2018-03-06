var response = prompt("Would you like to print your name?");
var name = prompt("What is your name?");
var exclamation = "";

while (response === "yes") {
alert("Hello. My name is " + name + exclamation);
exclamation += "!";
response = prompt("Would you like to print your name again?");
}