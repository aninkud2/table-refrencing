const express= require('express');
const router = express.Router();
const {newComment, allComment, removeComment} = require('../controller/commentController');


router.route('/:id/comments')
.post(newComment)
.get(allComment)

router.route('/:blogId/comments/:comId')
.delete(removeComment)

module.exports= router;