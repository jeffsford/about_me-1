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

var answer2 = prompt('Do you want to play a game to get to know me better?');
if (answer2.toLowerCase() === 'yes' || answer2.toLowerCase() === 'y'){
  console.log('Great! Let\'s get started');
  alert('Great! Let\'s get started');
} else if (answer2.toLowerCase() === 'no' || answer2.toLowerCase() === 'n') {
  console.log('Too bad, we are going to play anyways');
  alert('Too bad, we are going to play anyways');
} else {
  console.log(noAnswer);
  alert(noAnswer);
}

var answer3 = prompt('Do you think I am from America');
if (answer3.toLowerCase() === 'yes' || answer3.toLowerCase() === 'y'){
  console.log('You got it!  I was born in Montana');
  alert('You got it!  I was born in Montana');
} else if (answer3.toLowerCase() === 'no' || answer3.toLowerCase() === 'n') {
  console.log('Sorry to dissapoint, I am from the land for the free');
  alert('Sorry to dissapoint, I am from the land for the free');
} else {
  console.log(noAnswer);
  alert(noAnswer);
}

var answer4 = prompt('Am I married?');
if (answer4.toLowerCase() === 'yes' || answer4.toLowerCase() === 'y'){
  console.log('Yup, and my wife is incredible!');
  alert('Yup, and my wife is incredible!');
} else if (answer4.toLowerCase() === 'no' || answer4.toLowerCase() === 'n') {
  console.log('You think a super specemin like me would be single?  I have been happily married for 3 years');
  alert('You think a super specemin like me would be single?  I have been happily married for 3 years');
} else {
  console.log(noAnswer);
  alert(noAnswer);
}

var answer5 = prompt('Do you want to get to know me even better?');
if (answer5.toLowerCase() === 'yes' || answer5.toLowerCase() === 'y'){
  console.log('Great! keep reading then');
  alert('Great! keep reading then');
} else if (answer5.toLowerCase() === 'no' || answer5.toLowerCase() === 'n') {
  console.log('Well that\'s too bad, I\'ll leave you to it then');
  alert('Well that\'s too bad, I\'ll leave you to it then');
} else {
  console.log(noAnswer);
  alert(noAnswer);
}
