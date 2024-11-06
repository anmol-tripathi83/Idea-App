/**
 * Write the logic to create the controllers for the idea resources 
 */

const ideas = require("../models/ideas.model");

let id = 3;   // initial count of the id



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

/**
 * Controllers that fetches idea based on the id 
 * 
 * GET 127.0.0.1:8000/ideaApp/api/v1/ideas/2
 */
exports.getIdeaBasedOnId = (req,res) =>{
    // we need to first read the idea id from the req path params
    idea_id = req.params.id;

    // using id, check if the idea with that id is present if present return the object that containing id 
    if(ideas[idea_id]){     // or can be written also as if(ideas.idea_id)
        res.status(200).send(ideas[idea_id]);
    }
    else{
        res.status(404).send({      // 404- http status code for not found
            message: "Idea with the given idea id not found"
        });
    }
}


/**
 * controllers for the creating new idea 
 */
exports.createIdea = (req,res) =>{
    // I need to read the request body
    idea_object = req.body;
    id++;
    idea_object["id"] = id;   // Setting the id in newly created object(there is no matter of ordering of key in the JS object)
    // Add the new object provided in the ideas object
    ideas[id] = idea_object;

    // Return the response 
    res.status(201).send(idea_object);
}