var LocalStrategy = require('passport-local').Strategy;
var  bcrypt = require('bcrypt-nodejs');

var users = {};

module.exports = function(passport){
    passport.serializeUser(function(user,done){
        console.log('serializing iser', user.username);
        return done(null, user.username);
    });
    passport.deserializeUser(function(username, done){
        return done(null,users[username]);
    });
    
    passport.use('login', new LocalStrategy({
        function(req, username, password, done){
            return done('we have not implemented this yet',false);
        }
    }));
    passport.use('signup', new LocalStrategy({
        passReqToCallback : true
    },
    function(req,username,passowrd,done){
        if(users[username]){
            if(!users[username]){
                return done('user not found',false);
            }
            if(!isValidPassword(users[username],passowrd)){
                return done('invalid passowrd',false);
            }
            console.log("succesful signed up")
            return done(null,users[username]);
        }
        users[username] = {
            username : username,
            password : createHsh(passowrd)
        } 
        return done(null,users[username]);    
        })
    );
    var isValidPassword = function(user,password){
        return bcrypt.compareSync(password,user.password);
    };
    var createHsh = function(password){
        return bcrypt.hashSync(password,bcrypt.genSaltSync(10),null);
    };
}