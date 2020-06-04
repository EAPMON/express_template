class MessageController {

  constructor(){}

  index(req, res){
    return res.send("hello world with express");
  }
}

module.exports = MessageController;