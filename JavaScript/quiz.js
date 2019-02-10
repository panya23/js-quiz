// quiz begins, no answers correct
var correct = 0;
// questions and answers
var answer1 = prompt('What language do you use to style web pages?');
if (answer1.toUpperCase() === 'CSS') {
    correct += 1;
}
var answer2 = prompt('Who was the first president?');
if (answer2.toUpperCase() === 'GEORGE WASHINGTON' || answer2.toUpperCase() === 'GEORGE' || answer2.toUpperCase() === 'GEORGEWASHINGTON') {
    correct += 1;
}
var asnwer3 = prompt('What do you use to build the structure of web pages?');
if (asnwer3.toUpperCase() === 'HTML') {
    correct += 1;
}
var answer4 = prompt('Who was the female to fly over the Atlantic Ocean?');
if (answer4.toUpperCase() === 'AMELIA EARHART' || answer4.toUpperCase() === 'AMELIA' || answer4.toUpperCase() === 'EARHART' ) {
    correct += 1;
}
var answer5 = prompt('What language do you use to add interactivity to a web page?');
if (answer5.toUpperCase() === 'JAVASCRIPT') {
    correct += 1;
}

// output result
document.write('<p>You got ' + correct + ' out of 5');

//output rank 
if (correct === 5) {
    document.write('<p>You earned a <strong> gold</strong> crown</p>');
} else if(correct >= 3) {
    document.write('<p> You earned a <strong>silver</strong> crown</p>');
} else if(correct <= 2) {
    document.write(' Sorry you get no crowns');
} else {
    document.write(' Sorry no crowns');
}