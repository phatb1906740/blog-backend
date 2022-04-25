const express = require("express");
const cors = require("cors");
const setupArticleRoutes = require('./app/routes/article.routes');
const setupUserRoutes = require('./app/routes/user.routes');

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req,res) => {
    res.json({message: "Welcome to blog application."});
});

setupArticleRoutes(app);
setupUserRoutes(app);

module.exports = app;