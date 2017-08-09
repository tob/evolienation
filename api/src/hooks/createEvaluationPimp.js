module.exports = function (options = {}) { // eslint-disable-line no-unused-vars

  function pickStudent() {
    var randNumb = Math.random(0,1);

    switch (true) {
    case randNumb <= 0.50 :
    debugger;
      findLucky('red');
      break;
    case randNumb > 0.50 && randNumb <= 0.83 :
    debugger;
      findLucky('yellow');
      break;
    case randNumb > 0.83:
    debugger;
      findLucky('green');
      break;
    default: findLucky('e');
    }
  }


  function findLucky(color){

    debugger;
    return function (hook) {
      debugger;
      hook.app.service('students').find({
        query: { currentColor: color}
      }).then((students)=> {
        var lottery = students.data;
        hook.data.color = color;
        hook.data.studentId = 'still to do';
        hook.data.remark = randomPick(lottery);
        return hook;
      });
      // (group => {
      //   const lottery = group.data;
      debugger;
      // here will go hook.app.service('students').patch({}).then.......
      // hook.data.color = color;
      // hook.data.studentId = 'still to do';
      // hook.data.remark = randomPick(lottery);
      // return hook;
    };
  }

  function randomPick(color) {
    this.color = color;
    debugger;
    var student =   Math.floor(Math.random() * (color.length));
    var lucky = color[student];
    return lucky;
  }

  pickStudent();

};
