const commonHooks = require('feathers-hooks-common');
const { authenticate } = require('feathers-authentication').hooks;
const { restrictToOwner } = require('feathers-authentication-hooks');
const { hashPassword } = require('feathers-authentication-local').hooks;

const restrict = [
  authenticate('jwt'),
  restrictToOwner({
    idField: '_id',
    ownerField: '_id'
  }),
];

module.exports = {
  before: {
    all: [],
    find: [],
    get: [
      // function(hook) {
      //   const userId = hook.result.userId;
      //
      //   // hook.app.service('users').get returns a Promise already
      //   return hook.app.service('users').get(userId).then(user => {
      //     // Update the result (the message)
      //     hook.result.user = user;
      //
      //     // Returning will resolve the promise with the `hook` object
      //     return hook;
      //   });
      // } 
     ],
    create: [ hashPassword() ],
    update: [ ...restrict, hashPassword() ],
    patch: [ ...restrict, hashPassword() ],
    remove: [ ...restrict ]
  },

  after: {
    all: [
      commonHooks.when(
        hook => hook.params.provider, // don't do this for internal service calls
        commonHooks.discard('password')
      ),
      commonHooks.unless(
        hook => (hook.params.user &&
          hook.params.user._id === hook.data._id), // don't show emails to other users
        commonHooks.discard('email')
      )
    ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
