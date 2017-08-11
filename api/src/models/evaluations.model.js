// evaluations-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const evaluations = new Schema({
    color: {type: String, },
    remark:  {type: String,},
    date: { type: Date, default: Date.now },
    studentId: {},
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });

  return mongooseClient.model('evaluations', evaluations);
};
