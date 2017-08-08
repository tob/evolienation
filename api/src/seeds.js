const feathers = require('feathers/client');
const rest = require('feathers-rest/client');
const superagent = require('superagent');
const hooks = require('feathers-hooks');
const auth = require('feathers-authentication-client');

const user = {
  email: 'test@test.dev',
  password: 'abcd1234'
};

const students = [
  {picture: '', currentColor:'red', name: 'Baron', classId: 3,
    evaluation:[
      { day: 'today', color:'red', remarks: 'bla bla'},
      { day: 'today', color:'red', remarks: 'bla bla'},
      { day: 'today', color:'red', remarks: 'bla bla'},
      { day: 'today', color:'red', remarks: 'bla bla'}
    ]},
  {picture: '', currentColor:'yellow', name: 'Lemon', classId: 3,
    evaluation:[
      { day: 'today', color:'yellow', remarks: 'bla bla'},
      { day: 'today', color:'yellow', remarks: 'bla bla'},
      { day: 'today', color:'yellow', remarks: 'bla bla'},
      { day: 'today', color:'yellow', remarks: 'bla bla'}
    ]},
  {picture: '', currentColor:'green', name: 'House', classId: 3,
    evaluation:[
      { day: 'today', color:'green', remarks: 'bla bla'},
      { day: 'today', color:'green', remarks: 'bla bla'},
      { day: 'today', color:'green', remarks: 'bla bla'},
      { day: 'today', color:'green', remarks: 'bla bla'}
    ]},
  {picture: '', currentColor:'red', name: 'Wine', classId: 3,
    evaluation:[
      { day: 'today', color:'red', remarks: 'bla bla'},
      { day: 'today', color:'red', remarks: 'bla bla'},
      { day: 'today', color:'red', remarks: 'bla bla'},
      { day: 'today', color:'red', remarks: 'bla bla'}
    ]},
  {picture: '', currentColor:'red', name: 'Mustard', classId: 3,
    evaluation:[
      { day: 'today', color:'yellow', remarks: 'bla bla'},
      { day: 'today', color:'yellow', remarks: 'bla bla'},
      { day: 'today', color:'yellow', remarks: 'bla bla'},
      { day: 'today', color:'yellow', remarks: 'bla bla'}
    ]},
  {picture: '', currentColor:'green', name: 'Lantern', classId: 3,
    evaluation:[
      { day: 'today', color:'green', remarks: 'bla bla'},
      { day: 'today', color:'green', remarks: 'bla bla'},
      { day: 'today', color:'green', remarks: 'bla bla'},
      { day: 'today', color:'green', remarks: 'bla bla'}
    ]},
  {picture: '', currentColor:'red', name: 'Bull', classId: 3,
    evaluation:[
      { day: 'today', color:'red', remarks: 'bla bla'},
      { day: 'today', color:'red', remarks: 'bla bla'},
      { day: 'today', color:'red', remarks: 'bla bla'},
      { day: 'today', color:'red', remarks: 'bla bla'}
    ]},
  {picture: '', currentColor:'yellow', name: 'mellow', classId: 3,
    evaluation:[
      { day: 'today', color:'yellow', remarks: 'bla bla'},
      { day: 'today', color:'yellow', remarks: 'bla bla'},
      { day: 'today', color:'yellow', remarks: 'bla bla'},
      { day: 'today', color:'yellow', remarks: 'bla bla'}
    ]},
  {picture: '', currentColor:'green', name: 'House', classId: 3,
    evaluation:[
      { day: 'today', color:'green', remarks: 'bla bla'},
      { day: 'today', color:'green', remarks: 'bla bla'},
      { day: 'today', color:'green', remarks: 'bla bla'},
      { day: 'today', color:'green', remarks: 'bla bla'}
    ]},
];

const feathersClient = feathers();

feathersClient
  .configure(hooks())
  .configure(rest('http://localhost:3030').superagent(superagent))
  .configure(auth());

feathersClient.service('users').create(user)
  .then(() => {
    feathersClient.authenticate({
      strategy: 'local',
      email: user.email,
      password: user.password
    })
      .then(() => {
        students.map((student) => {
          feathersClient.service('students').create(student)
            .then((result) => {
              console.log('student seeded...', result.title);
            }).catch((error) => {
              console.error('Error seeding student!', error.message);
            });
        })
      })
      .catch(function(error){
        console.error('Error authenticating!', error);
      });
  })
  .catch(function(error) {
      console.error('Error creating user!' + error);
  });
