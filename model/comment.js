const mongoose = require ('mongoose')

const commentModel = new mongoose.Schema({
    postComment: {
        type: String
    },
    posted: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "blogPost"
    }
},
{
  timestamps: true
})
const comment = mongoose.model('comment', commentModel)
module.exports = comment;