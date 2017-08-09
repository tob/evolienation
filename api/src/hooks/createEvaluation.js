// var red = students.filter(student =>  student.currentColor === "red");

// //Algorithm starts
// function pickStudent() {
//   var randNumb = Math.random(0,1);
//
//   switch (true) {
//   case randNumb <= 0.50 :
//     var red = hool.data.filter(student =>  student.currentColor === "red");
//     randomPick(red);
//     break;
//   case randNumb > 0.50 && randNumb <= 0.83 :
//     var yellow = students.filter(student => student.currentColor === "yellow");
//     randomPick(yellow);
//     break;
//   case randNumb > 0.83:
//     var green = students.filter(student => student.currentColor === "green");
//     randomPick(green);
//     break;
//   default: console.log('default');
// }
//
// function randomPick(color) {
//   this.color = color
//   var student =   Math.floor(Math.random() * (color.length));
//   lucky = color[student]
//   return lucky
//   }
// }

//Algorithm ends


// test ends


module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return function (hook) {
  // makeGroup('green')
    return hook.app.service('students').find({
      query: { currentColor: 'green'}
    }).then(group => {
      const green = group.data;

      hook.data.color = 'pistacchio';
      hook.data.remark = green;
      hook.data.studentId = 'green';

      // IMPORTANT: always return the `hook` object in the end
      return hook;
    });

    // const {evaluation} = hook.params;
  };
};

// hook.data.color = 'red';
// hook.data.remark =  'bla bla bla 1';
// hook.data.date = '';

//
// function makeGroup(gColor){
//   return hook.app.service('students').find({
//     query: { currentColor: gColor}
//   }).then(addToGroup => {
//     const group = addToGroup.data;
//   })
// }
