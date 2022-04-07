const express = require("express");
const articleController = require('../controllers/article.controller');

module.exports = (app) => {
    const router = express.Router();

    router.get("/article", articleController.findAll);
    
    router.get("/article/:id", articleController.findOne);
    
    router.post("/article", articleController.create);
    
    router.put("/article/:id", articleController.update);
    
    router.delete("/article/:id", articleController.delete);
    
    
    app.use("/api", router);
};