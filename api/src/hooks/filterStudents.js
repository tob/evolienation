module.exports = function () {
  return function isCurrentColor(hook, next) {
    console.log(hook);
    console.log(next);
    if(hook.data.currentColor != 'red') {
      return next(new Error('You are not allowed to access this information'));
    }
    next();
  };
};


// module.exports = function () {
//   return function filterCurrentColor(data, connection, hook) {
//     const query = {
//       name: 'Baron',
//     };
//     return hook.data.find({ query })
//       .then(result => {
//         if (result.total > 0) {
//           return data;
//         }
//         return false;
//       });
//   };
// };
