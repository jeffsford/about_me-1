/*'use strict';
var question1 = "What's your name?";
var userName = prompt(question1);
console.log(question1 + ": " + userName);
var response1 = "Hi " + userName;
alert(response1);

var question2 = "Have we met before?";
var greeting = confirm(question2);
console.log(question2 + ': ' + greeting);
if (greeting === true){
  var response2 = ('It\'s great to see you again!');
} else {
  var response2 = ('Well then it\'s grat to meet you, My name is Zach');
}
alert(response2);

var question3 = "Do you want to play a game to get to know me better?";
var game = confirm(question3);
console.log(question3 + ': ' + game);
if (game === true){
  var response3 = ('Great, let\'s get started!');
} else {
  var response3 = ('Too bad, we are going to play anyways');
}
alert(response3);

var question4 = "Do you think I am from America?";
var country = confirm(question4);
console.log(question4 + ': ' + country);
if (country === true){
  var response4 = ('You got it, I was born in Montana');
} else {
  var response4 = ('Sorry to dissappoint, but I was born in the US of A');
}
alert(response4);

var question5 = "Am I married?";
var married = confirm(question5);
console.log(question5 + ': ' + married);
if (married === true){
  var response5 = ('You got it! and my wife is incredible!');
} else {
  var response5 = ('What!?! you think a fine specimen like myself would not be taken? I\'ve been married for over 3 years!');
}
alert(response5);

var question6 = "Do you want to learn more about me?";
var learnMore = confirm(question6);
console.log(question6 + ': ' + learnMore);
if (learnMore === true){
  var response6 = ('Great! let\'s get started');
} else {
  var response6 = ('Well I\'m sorry to hear that, I\'ll leave you to it then');
}
alert(response6);/*
