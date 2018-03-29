
 




const quizQuestions = [

{
  question: "The Fancy",
  answers:  {
    a: "Jack Rackham", 
    b: "Henry Avery",
    c: "Captain Hook",
    d: "Jack Sparrow",
  }, 
  correct: "b" 

},

{
  question: "The Walrus",
  answers: {
    a: "Captain Flint", 
    b: "Charles Vane",
    c: "Anne Bonny",
    d: "Captain Barbosa",
  }, 
  correct: "a"

},

{
  question: "Queen Anne's Revenge",
  answers: {
    a: "Israel Hands", 
    b: "Henry Avery",
    c: "Long John Silver",
    d: "Blackbeard",
  }, 
  correct: "d", 

},

{
  question: "The Black Pearl",
  answers: {
    a: "Edward Teach", 
    b: "Jack Sparrow",
    c: "Legolas",
    d: "Billy Bones",
  }, 
  correct: "b", 

},

{
  question: "The Adventure Galley",
  answers: {
    a: "Calico Jack", 
    b: "Charles Vane",
    c: "Captain Kidd",
    d: "Ruffio",
  }, 
  correct: "c", 

},

{
  question: "The Royal Fortune",
  answers: {
    a: "Bart Roberts", 
    b: "Blackbeard",
    c: "Billy Bones",
    d: "Captain Flint",
  }, 
  correct: "a", 

},

{
  question: "The Jolly Roger",
  answers: {
    a: "Israel Hannds", 
    b: "Ben Gunn",
    c: "Henry Avery",
    d: "Captain Hook",
  }, 
  correct: "d", 

},

{
  question: "The Ranger",
  answers: {
    a: "Captain Kidd", 
    b: "Charles Vane",
    c: "Long John Silver",
    d: "Blackbeard",
  }, 
  correct: "b", 

},

{
  question: "The Rising Sun",
  answers: {
    a: "Captain Moody", 
    b: "Israel Hands",
    c: "Edward Teach",
    d: "Blackbeard",
  }, 
  correct: "a", 

},

{
  question: "The Hispaniola",
  answers: {
    a: "Bart Roberts", 
    b: "Charles Vane",
    c: "Long John Silver",
    d: "Edward Teach",
  }, 
  correct: "c", 

}


]




var letters = ["a","b","c","d"];
var score = 0;



var time = 0;


function start() {
intervalId = setInterval(count, 1000);
}

function count() {

time++;
var converted = time;
$("#timer").text(converted);
if(converted === 90) { 

  Score();
  alert("Your Score is " +score+"/10!");
  location.reload();

}

};

function Setup() {

  var i = 0;
  var questionNumber = 0;

  for(i = 0; i < quizQuestions.length; i++) {

    $("#quiz").append(quizQuestions[i].question);
    $("#quiz").append(
      '<br>',
      '<form>',
      '<input type="radio" name="quiz' +questionNumber+'" value="a">',quizQuestions[i].answers.a,'<br>',
      '<input type="radio" name="quiz' +questionNumber+'" value="b">',quizQuestions[i].answers.b,'<br>',
     '<input type="radio" name="quiz' +questionNumber+'" value="c">',quizQuestions[i].answers.c,'<br>',
    '<input type="radio" name="quiz' +questionNumber+'" value="d">',quizQuestions[i].answers.d,'<br>',
    '<br>'
    )
    questionNumber++;
    };

    $("#quiz").append("</form>")
    
  

  };

function Score() {

  for(j = 0; j < 10; j++){

    if($('input[name=quiz' +j+ ']:checked').val() === quizQuestions[j].correct) {score++};
  
    console.log(score);
  
  }


};

start();
Setup();

$("#score").on("click", function() {

  Score();

});