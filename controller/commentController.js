const express = require('express')
const commentModel = require('../model/comment');
const blog = require('../model/model');
const blogModel = require('../model/model')

const newComment = async (req, res) => {
    try{
        const blogId = req.params.id;
        const blog = await blogModel.findById(blogId);
        const com = new commentModel(req.body);
        com.posted = blog;
        com.save();
        blog.comments.push(com);
        await blog.save();

        res.status(200).json({
            status: "Success",
            data: com
        })

    }catch(e){
        res.status(400).json({
            status: "Failled",
            message: e.message
        })
    }
}

const allComment = async (req, res) => {
    try{
        const comments = await commentModel.find();
        res.status(200).json({
            status: "Success",
            data: comments
        })
    }catch(e){
        res.status(400).json({
            status: "Failed",
            message: e.message
        })
        
    }
}

const removeComment = async (req, res) =>{
    try{
        const comId = req.params.comId;
        const blogId = req.params.blogId;
        await commentModel.findByIdAndDelete(comId);
        blog = await blogModel.findById(blogId);
        await blog.comments.pull('comId');

        res.status(200).json({
            status: "Success",
            message: "Deleted succesfully"
        })
    }catch(error){
        res.status(404).json({
            status: "Failed",
            message: error.message
        })
    }
}

module.exports = {
    newComment,
    allComment,
    removeComment
}