const Article = require('../models/Article');

// [GET] /api/article/
exports.findAll = async (req, res, next) => {
    Article.find({})
            .then((articles) => {
                res.send(articles);
            })
            .catch(next);
};

// [GET] /api/article/:id
exports.findOne = async (req, res, next) => {
    Article.findOne( { _id: req.params.id } )
            .then((data) => {
                res.send(data);
            })
            .catch(next)
};

// [POST] /api/article/
exports.create = async (req, res, next) => {
    var article = new Article(req.body);
    article.save()
            .then((data) => {
                res.send(data);
            })
            .catch(next)
};


// [PUT] /api/article/:id
exports.update = async (req, res, next) => {
    
    Article.findOneAndUpdate({ _id: req.params.id }, req.body)
            .then((data) => {
                res.send(data)
            })
            .catch(next);
};

// [DELETE] /api/article/:id
exports.delete = async (req, res, next) => {
    const { id } = req.params;
    const condition = { _id: id };
    Article.findOneAndDelete(condition)
        .then(() => {
            res.send()
        })
        .catch(next);
};