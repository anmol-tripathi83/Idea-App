
const idea_controllers = require("../controllers/idea.controllers");

/**
 * Route for 
 * GET 127.0.0.1:8000/ideaApp/api/v1/ideas
 */

module.exports = (app) =>{   // connect app to the routes
    // GET 127.0.0.1:8000/ideaApp/api/v1/ideas
    app.get("/ideaApp/api/v1/ideas",idea_controllers.getAllIdeas);   // when this URI called in get call then hand it over to controllers


    //GET 127.0.0.1:8000/ideaApp/api/v1/ideas/5
    app.get("/ideaApp/api/v1/ideas/:id",idea_controllers.getIdeaBasedOnId);

    //POST 127.0.0.1:8000/ideaApp/api/v1/ideas
    app.post("/ideaApp/api/v1/ideas",idea_controllers.createIdea);

    // PUT 127.0.0.1:8000/ideaApp/api/v1/ideas/1
    app.put("/ideaApp/api/v1/ideas/:id",idea_controllers.updateIdea);
}