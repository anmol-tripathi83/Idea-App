/**
 * Write the logic to create the controllers for the idea resources 
 */

const ideas = require("../models/ideas.model");

/**
 * Create the controllers for the fetching all the ideas
 * GET 127.0.0.1:8000/ideaApp/api/v1/ideas 
 * should return the list of all ideas
 */

exports.getAllIdeas = (req,res)=>{           // getAllIdeas function which is available everywhere
    // first read all the ideas from idea model file 

    // Return all those ideas
    res.status(200).send(ideas);     // 200 - http status code for okay
}