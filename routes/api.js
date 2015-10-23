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
router.route('/posts/:id')
    //returns a particular post
    .get(function(req,res){
       res.send({message:"TODO will return post with id"+req.params.id}); 
    })
    
    .put(function(req,res){
        res.send({message:"Modified post"+req.params.id});
    })
    .delete(function(req,res){
       res.send({message:"Was deleted"+req.params.id}) ;
    });
    
module.exports=router;