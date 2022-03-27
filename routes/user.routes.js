const userController = require("../src/user/user.controller")
const express = require("express");
const router = express.Router();
const validatetoken =require("../src/helpers/validateToeken")
router.post('/registration',userController.userRegister)
router.post('/login', userController.userLogin)

router.get('/tokengen',validatetoken.validateToken,async (req,res)=>{
   res.send(req.decoded)
})
router.post('/create',validatetoken.validateToken, userController.create)
router.put("/:id/update", userController.updateTodo);
router.delete("/:id/delete", userController.deleteTodo);
router.get("/gettodos", validatetoken.validateToken, userController.getTodos);

module.exports = router;