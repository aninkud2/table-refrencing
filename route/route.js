const express = require('express');
const router = express.Router();
const {newData, updateData, deleteData, getAll, getOne} = require ('../controller/controller');

router.post('/post',newData)

router.patch('/update/:id', updateData)

router.delete('/delete/:id', deleteData)

router.get('/getAll', getAll)

router.get('/post/:id', getOne)

module.exports=router