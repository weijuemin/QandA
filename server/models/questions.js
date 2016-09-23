var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    QuestionSchema = new Schema({
      title: {
        type: String,
        required: true,
        minlength: 10
      },
      description:{
        type: String,
        default: "As title"
      },
      _answers: [{
        type: Schema.Types.ObjectId,
        ref: 'Answer'
      }]
    }, {timestamps: true});

module.exports = mongoose.model('Question', QuestionSchema);