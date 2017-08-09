module.exports = function (options = {}) { // eslint-disable-line no-unused-vars

  function pickColor() {
    var randNumb = Math.random(0,1);
    switch (true) {
    case randNumb <= 0.50 :
      var color = 'red';
      break;
    case randNumb > 0.50 && randNumb <= 0.83 :
      var color = 'yellow';
      break;
    case randNumb > 0.83:
      var color = 'green';
      break;
    default: var color = 'red';
    }
    return color
    debugger;
  }



  /////////////////////////
  return function (hook) {
  // makeGroup('green')
    var color = pickColor();
    debugger;
    return hook.app.service('students').find({
      query: { currentColor: color}
    }).then(group => {
      const lottery = group.data;
  debugger;
      hook.data.color = color;
      hook.data.remark = lottery;
      hook.data.studentId = findLucky(lottery);

      // IMPORTANT: always return the `hook` object in the end
      return hook;
    });
    // const {evaluation} = hook.params;
  }


  function findLucky(array) {
    debugger;
    var student =   Math.floor(Math.random() * (array.length));
    var lucky = array[student];
    return lucky;
  }


};
