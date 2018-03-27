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

function Setup () {

  for(var i = 0; i < quizQuestions.length; i++) {

    $("#quiz").append(quizQuestions[i].question);
    $("#quiz").append("<br/>" +quizQuestions[i].answers.a);
    $("#quiz").append("<br/>" +quizQuestions[i].answers.b);
    $("#quiz").append("<br/>" +quizQuestions[i].answers.c);
    $("#quiz").append("<br/>" +quizQuestions[i].answers.d+ "<br/> <br/>");



};

}

Setup();