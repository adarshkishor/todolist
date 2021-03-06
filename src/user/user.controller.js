const user = require("./user.model")
const jwt = require("../helpers/tokengeneration")
const todo =  require("./todo.model")
const {boolean}=require('joi')


exports.userRegister= async (req,res)=>{

    console.log(req.body)
    var userObject = await user.create(req.body)
    res.send(userObject)
}
exports.userLogin = async (req, res) => {

    const userObj = await user.findOne({

        username: req.body.username

    })
if (userObj==null){
   return res.send('user not found')
}
    var matched = await userObj.comparePassword(req.body.password,async(err,match)=>
    {
        if (match){
            var gnjwt = await jwt.generateJwt(userObj._id,userObj._id,userObj._id)
            if (gnjwt.err){
               return res.send("Token generation failed")
            
            }
            else{
            return res.send({MESSAGE:"login successfull",token:gnjwt.token})

            }
        }
        else{
            res.send("Login failed")
        }
    })

}
exports.create =  async (req, res) => {

    try{
        req.body.userid=req.decoded.id
        
           
            var userObject = await todo.create(req.body)
            res.send(userObject)
        }
        catch(e)
        {
            console.log(e)
        }
    
    
}