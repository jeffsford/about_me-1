/*'use strict';
var noAnswer = 'I don\'t understand, please enter yes or no'

var question1 = 'What\'s your name?';
var userName = prompt(question1);
console.log(question1 + ": " + userName);
var response1 = 'Hi ' + userName;
alert(response1);

var acceptableAnswer1 = false;
var acceptableAnswer2 = false;
var acceptableAnswer3 = false;
var acceptableAnswer4 = false;
var acceptableAnswer5 = false;

while (!acceptableAnswer1) {
var answer1 = prompt('Have we met before?');
if (answer1.toLowerCase() === 'yes' || answer1.toLowerCase() === 'y'){
  var meetYes = 'It\'s great to see you again!'
  console.log(meetYes);
  alert(meetYes);
  acceptableAnswer1 = true;
} else if (answer1.toLowerCase() === 'no' || answer1.toLowerCase() === 'n') {
  var meetNo = 'Well then it\'s great to meet you, My name is Zach'
  console.log(meetNo);
  alert(meetNo);
  acceptableAnswer1 = true;
} else {
  console.log(noAnswer);
  alert(noAnswer);
  }
}

while (!acceptableAnswer2) {
var answer2 = prompt('Do I like games?');
if (answer2.toLowerCase() === 'yes' || answer2.toLowerCase() === 'y'){
  var gameYes = 'Of course I do, let\'s play a guessing game'
  console.log(gameYes);
  alert(gameYes);
  acceptableAnswer2 = true;
} else if (answer2.toLowerCase() === 'no' || answer2.toLowerCase() === 'n') {
  var gameNo = 'What!?! of course I am, and you get to play a guessing game with me';
  console.log(gameNo);
  alert(gameNo);
  acceptableAnswer2 = true;
} else {
  console.log(noAnswer);
  alert(noAnswer);
  }
}

while (!acceptableAnswer3) {
var answer3 = prompt('Do you think I am from America');
if (answer3.toLowerCase() === 'yes' || answer3.toLowerCase() === 'y'){
  var americanYes = 'You got it!  I was born in Montana';
  console.log(americanYes);
  alert(americanYes);
  acceptableAnswer3 = true;
} else if (answer3.toLowerCase() === 'no' || answer3.toLowerCase() === 'n') {
  var americanNo = 'Sorry to dissapoint, I am from the land for the free';
  console.log(americanNo);
  alert(americanNo);
  acceptableAnswer3 = true;
} else {
  console.log(noAnswer);
  alert(noAnswer);
  }
}

while (!acceptableAnswer4) {
var answer4 = prompt('Am I married?');
if (answer4.toLowerCase() === 'yes' || answer4.toLowerCase() === 'y'){
  var marriedYes = 'Yup, and my wife is incredible!';
  console.log(marriedYes);
  alert(marriedYes);
  acceptableAnswer4 = true;
} else if (answer4.toLowerCase() === 'no' || answer4.toLowerCase() === 'n') {
  var marriedNo = 'You think a super specemin like me would be single?  I have been happily married for 3 years'
  console.log(marriedNo);
  alert(marriedNo);
  acceptableAnswer4 = true;
} else {
  console.log(noAnswer);
  alert(noAnswer);
  }
}

while (!acceptableAnswer5) {
var answer5 = prompt('Am I a dog or a cat person?');
if (answer5.toLowerCase() === 'dog'){
  var dog = 'I love dogs!'
  console.log(dog);
  alert(dog);
  acceptableAnswer5 = true;
} else if (answer5.toLowerCase() === 'cat') {
  var cat = 'Ewww cat\'s are gross'
  console.log(cat);
  alert(cat);
  acceptableAnswer5 = true;
} else {
  console.log(noAnswer);
  alert(noAnswer);
  }
}*/

var age = 31;
for (var i = 0; i < 4; i++) {
  var answer6 = parseInt(prompt('How old am I?'));
  console.log(typeof answer6);
  if (answer6 == age) {
    var correctAnswer = 'Congratulatioin! You guessed right!';
    console.log(correctAnswer);
    alert(correctAnswer);
    break;
  }
  else if (answer6 > age) {
    var tooHigh = 'You\'re answer is too high';
    console.log(tooHigh);
    alert(tooHigh);
  }
  else if (answer6 > i) {
    var tooLow = 'You\'re answer is too low';
    console.log(tooLow);
    alert(tooLow);
  }
  else {
    var answerInvalid = 'not a valid answer!';
    console.log(answerInvalid);
    alert(answerInvalid);
  }
  if (i === 3){
    var lose = 'Too many tries, you lose!';
    console.log(lose);
    alert(lose);
  }
}

var vegetableArray = ['tomato', 'asparagus', 'potato', 'carrot', 'squash', 'celery', 'spinach', 'turnip'];
for (var i = 0; i < 6; i++) {
  var favoriteVegetable = prompt('What\'s my favorite vegtable?');
  if (favoriteVegetable === vegetableArray['asparagus']) {
    var asparagus = 'MMMMM, I love asparagus';
    console.log(asparagus);
    alert(asparagus);
  }
  else {
    var wrongVegtable = favoriteVegetable + 'is good, but not my favorite';
    console.log(wrongVegtable);
    alert(wrongVegtable);
  }
}
