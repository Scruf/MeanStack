var express = require('express');
var router = express.Router();

router.route('/posts')
    //returns all the post
.get(function(req, res){
     res.send({message:"TOD return qall posts"});
})


.post(function(req,res){
    //tep
    res.send({message:"TODO"});
});
module.exports=router;