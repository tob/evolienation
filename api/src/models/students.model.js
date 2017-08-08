// students-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;

  const evaluation_schema = new Schema({
    color: String,
    remark:  String,
    date: { type: Date, default: Date.now },
  });

  const students = new Schema({
    name: String,
    picture:  String,
    classId:  Number,
    currentColor:  String,
    evaluation: [evaluation_schema],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });

  return mongooseClient.model('students', students);
};
