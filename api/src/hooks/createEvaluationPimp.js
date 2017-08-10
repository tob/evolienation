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
    return color;
  }

  return function (hook) {
  // makeGroup('green')
    var color = pickColor();
    return hook.app.service('students').find({
      query: { currentColor: color}
    })
      .then(group => {
        const lottery = group.data;
        hook.data.color = color;
        hook.data.studentId = findLucky(lottery);
        return hook;
      })
      .catch(group => {
        const lottery = group.data;
        hook.data.studentId = findLucky(lottery);
        return hook;
      });
  };

  function findLucky(array) {
    var student =   Math.floor(Math.random() * (array.length));
    var lucky = array[student];
    return lucky;
  }

};
