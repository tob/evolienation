// ALGORITHM PART! As a Teacher, from the class view I can click a button “ASK A QUESTION”. It shows me the name and picture of a random student to ask a question. Not entirely random though: RED students get ~50% of the questions YELLOW students ~33%, and GREEN students ~17%.




// var Green = [1,2,3]
// var Yellow = [4,5,6]
// var Red = [7,8,9,10]

students = [
  {picture: "", currentColor:'Red', name: "Baron", classId: 3,
  evaluation:[
    { day: "today", color:"red", remarks: "bla bla"},
    { day: "today", color:"red", remarks: "bla bla"},
    { day: "today", color:"red", remarks: "bla bla"},
    { day: "today", color:"red", remarks: "bla bla"}
  ]},
  {picture: "", currentColor:'Red', name: "Lemon", classId: 3,
  evaluation:[
    { day: "today", color:"yellow", remarks: "bla bla"},
    { day: "today", color:"yellow", remarks: "bla bla"},
    { day: "today", color:"yellow", remarks: "bla bla"},
    { day: "today", color:"yellow", remarks: "bla bla"}
  ]},
  {picture: "", currentColor:'Red', name: "House", classId: 3,
  evaluation:[
    { day: "today", color:"green", remarks: "bla bla"},
    { day: "today", color:"green", remarks: "bla bla"},
    { day: "today", color:"green", remarks: "bla bla"},
    { day: "today", color:"green", remarks: "bla bla"}
  ]},
  {picture: "", currentColor:'Red', name: "Wine", classId: 3,
  evaluation:[
    { day: "today", color:"red", remarks: "bla bla"},
    { day: "today", color:"red", remarks: "bla bla"},
    { day: "today", color:"red", remarks: "bla bla"},
    { day: "today", color:"red", remarks: "bla bla"}
  ]},
  {picture: "", currentColor:'Red', name: "Mustard", classId: 3,
  evaluation:[
    { day: "today", color:"yellow", remarks: "bla bla"},
    { day: "today", color:"yellow", remarks: "bla bla"},
    { day: "today", color:"yellow", remarks: "bla bla"},
    { day: "today", color:"yellow", remarks: "bla bla"}
  ]},
  {picture: "", currentColor:'Red', name: "Lantern", classId: 3,
  evaluation:[
    { day: "today", color:"green", remarks: "bla bla"},
    { day: "today", color:"green", remarks: "bla bla"},
    { day: "today", color:"green", remarks: "bla bla"},
    { day: "today", color:"green", remarks: "bla bla"}
  ]},
  {picture: "", currentColor:'Red', name: "Bull", classId: 3,
  evaluation:[
    { day: "today", color:"red", remarks: "bla bla"},
    { day: "today", color:"red", remarks: "bla bla"},
    { day: "today", color:"red", remarks: "bla bla"},
    { day: "today", color:"red", remarks: "bla bla"}
  ]},
  {picture: "", currentColor:'Red', name: "mellow", classId: 3,
  evaluation:[
    { day: "today", color:"yellow", remarks: "bla bla"},
    { day: "today", color:"yellow", remarks: "bla bla"},
    { day: "today", color:"yellow", remarks: "bla bla"},
    { day: "today", color:"yellow", remarks: "bla bla"}
  ]},
  {picture: "", currentColor:'Red', name: "House", classId: 3,
  evaluation:[
    { day: "today", color:"green", remarks: "bla bla"},
    { day: "today", color:"green", remarks: "bla bla"},
    { day: "today", color:"green", remarks: "bla bla"},
    { day: "today", color:"green", remarks: "bla bla"}
  ]},
]


var pippo = students.first
var pippoName = pippo.currentColor
console.log(pippoName)

var Green = ['Al', 'Lantern', 'House']
var Yellow = ['Mustard', 'Lemon', 'Sun']
var Red = ['Baron', 'Eyes', 'Wine']

var randNumb = Math.random(0,1)

function pickStudent(color) {
  var student =   Math.floor(Math.random() * (color.length));
  console.log(student)
  color
  lucky = color[student]
}

switch (true) {
  case randNumb <= 0.50 :
    pickStudent(Red);
    console.log('red ' + lucky);
    break;
  case randNumb > 0.50 && randNumb <= 0.83 :
    pickStudent(Yellow);
    console.log('yellow ' + lucky);
    break;
  case randNumb > 0.83:
    pickStudent(Green);
    console.log('green '+ lucky);
    break;
  default: console.log('default');
}
