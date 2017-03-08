'use strict';
var noAnswer = 'I don\'t understand, please enter yes or no'

var question1 = 'What\'s your name?';
var userName = prompt(question1);
console.log(question1 + ": " + userName);
var response1 = 'Hi ' + userName;
alert(response1);

var answer1 = prompt('Have we met before?');
if (answer1.toLowerCase() === 'yes' || answer1.toLowerCase() === 'y'){
  var meetYes = 'It\'s great to see you again!'
  console.log(meetYes);
  alert(meetYes);
} else if (answer1.toLowerCase() === 'no' || answer1.toLowerCase() === 'n') {
  var meetNo = 'Well then it\'s great to meet you, My name is Zach'
  console.log(meetNo);
  alert(meetNo);
} else {
  console.log(noAnswer);
  alert(noAnswer);
}

var answer2 = prompt('Do I like games?');
if (answer2.toLowerCase() === 'yes' || answer2.toLowerCase() === 'y'){
  var gameYes = 'Of course I do, let\'s play a guessing game'
  console.log(gameYes);
  alert(gameYes);
} else if (answer2.toLowerCase() === 'no' || answer2.toLowerCase() === 'n') {
  var gameNo = 'What!?! of course I am, and you get to play a guessing game with me';
  console.log(gameNo);
  alert(gameNo);
} else {
  console.log(noAnswer);
  alert(noAnswer);
}

var answer3 = prompt('Do you think I am from America');
if (answer3.toLowerCase() === 'yes' || answer3.toLowerCase() === 'y'){
  var americanYes = 'You got it!  I was born in Montana';
  console.log(americanYes);
  alert(americanYes);
} else if (answer3.toLowerCase() === 'no' || answer3.toLowerCase() === 'n') {
  var americanNo = 'Sorry to dissapoint, I am from the land for the free';
  console.log(americanNo);
  alert(americanNo);
} else {
  console.log(noAnswer);
  alert(noAnswer);
}

var answer4 = prompt('Am I married?');
if (answer4.toLowerCase() === 'yes' || answer4.toLowerCase() === 'y'){
  var marriedYes = 'Yup, and my wife is incredible!';
  console.log(marriedYes);
  alert(marriedYes);
} else if (answer4.toLowerCase() === 'no' || answer4.toLowerCase() === 'n') {
  var marriedNo = 'You think a super specemin like me would be single?  I have been happily married for 3 years'
  console.log(marriedNo);
  alert(marriedNo);
} else {
  console.log(noAnswer);
  alert(noAnswer);
}

var answer5 = prompt('Am I a dog or a cat person?');
if (answer5.toLowerCase() === 'dog'){
  var dog = 'I love dogs!'
  console.log(dog);
  alert(dog);
} else if (answer5.toLowerCase() === 'cat') {
  var cat = 'Ewww cat\'s are gross'
  console.log(cat);
  alert(cat);
} else {
  console.log(noAnswer);
  alert(noAnswer);
}
