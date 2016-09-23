var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    AnswerSchema = new Schema({
      content: {
        type: String,
        required: true,
        minlength: 5
      },
      details: {
        type: String
      },
      likes: {
        type: Number,
        default: 0
      },
      user:{
        type: String,
        required: true
      },
      _question: {
        type: Schema.Types.ObjectId,
        ref: 'Question'
      }
    }, {timestamps: true});

module.exports = mongoose.model('Answer', AnswerSchema);