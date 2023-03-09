const User = require("../users/users-model")
const {

} = require('../middleware/middleware')

function logger(req, res, next) {
  // DO YOUR MAGIC
  const timestamp = new Date().toLocaleString()
  const method= req.method
  const url = req.originalUrl
  console.log(`[${timestamp}] ${method} to ${url}`)
  next()

}
async function validateUserId(req, res, next) {
  // DO YOUR MAGIC
  try{
    const user = await User.getById(req.params.id)
    if (!user) {
      res.status(404).json({message: 'no such user'})
    } else { 
      req.user = user
      next()
    }
  }catch(err) {
    res.status(500).json({message: "Problem finding user"})
  }
  console.log("validateUserId middleware")
  next()

}
function validateUser(req, res, next) {
  // DO YOUR MAGIC
  
  console.log("validateUser middleware")
  next()

}
function validatePost(req, res, next) {
  // DO YOUR MAGIC
  console.log("validatePost middleware")
  next()

}
// do not forget to expose these functions to other modules

module.exports = {
  logger, validateUserId, validateUser, validatePost
}