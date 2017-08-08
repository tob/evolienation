module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return function (hook) {
    const {student} = hook.params;

    // Hooks can either return nothing or a promise
    // that resolves with the `hook` object for asynchronous operations
    return Promise.resolve(hook);
  };
};
