var timeOfDay= prompt("What time of day is it?");


function output(meal, foodSuggestion) {
return alert("Since it is " + timeOfDay + ", you should be eating " + meal + ". We suggest " + foodSuggestion + ".");
}

if (timeOfDay === "morning") {
output("breakfast", "eggs and toast")
} else if (timeOfDay === "noon") {
output ("lunch", "a salad")
} else if (timeOfDay === "evening") {
output ("dinner", "chicken and rice")
} else {
alert("Please enter 'morning', 'noon', or 'evening'. Refresh to try again.")
}



