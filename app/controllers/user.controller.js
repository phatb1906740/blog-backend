const User = require('../models/User');

exports.signIn = async (req, res, next) => {
    var newUser = new User(req.body);
    
    newUser.save()
    .then((data) => {
        res.send(data);
    })
    .catch(next)
};

exports.logIn = async (req, res,next) => {
    User.findOne( { email: req.body.email, password: req.body.password } )
    .then((data) => {
        if(!data)
            res.send();
        res.send(data);
    })
    .catch(next)
  };
