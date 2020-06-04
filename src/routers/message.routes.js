const { Router } = require("express");
const {MessageController} = require("../controllers/index")

module.exports = () => {
  const router = Router();
  const messageController = new MessageController();

  router.get("/", (req, res) => {
    return messageController.index(req, res)
  });

  return router;
}
