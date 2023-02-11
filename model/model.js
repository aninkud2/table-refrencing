const mongoose = require ('mongoose')

const blogModel = new mongoose.Schema({
    title: {
        type: String
    },
    desc: {
        type: String
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "comment"
    }]
},
{
  timestamps: true
})
const blog = mongoose.model('blogPost', blogModel)
module.exports = blog


