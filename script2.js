var firstResponse = prompt("Do you want to play?");
var array = [ ];

if (firstResponse === "yes") {
	do {
		var secondResponse = prompt("Enter a word.");
		array.push(secondResponse);
		var thirdResponse = prompt("Do you want to play again?");
		
} while (thirdResponse === "yes");
alert(array);
} else {
alert("Have a nice day!");
}