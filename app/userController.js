var user = require('./model/user')

module.exports = function(app)
{
	app.post('/api/adduser',function(req,res){
        UserInfo.create({
            name : req.body.name,
            email : req.body.email,
            password : req.body.password,
            done: false
        },function(err, callback){
            if(err)
                res.send(err)
            else
                res.send(callback)
        })
    })

app.post('/api/login',function(req,res){
        UserInfo.findOne({email:req.body.email},function(err, callback){
            if(err)
                res.send(err)
            else
                res.send(callback)
        })
    })


}