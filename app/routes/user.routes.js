const express = require("express");
const userController = require('../controllers/user.controller');

module.exports = (app) => {
    const router = express.Router();

    router.post("/user/signin", userController.signIn);

    router.post("/user/login", userController.logIn);
    
    
    app.use("/api", router);
};