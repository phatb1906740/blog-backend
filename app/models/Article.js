const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Article = new Schema({
    title: { type: String},
    body: { type: String},
    image: { type: String},
    author: { type: String},
    createAt: { type: Date, default: Date.now() },
    updateAt: { type: Date, default: Date.now() },
});

module.exports = mongoose.model('Article', Article);