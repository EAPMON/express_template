const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
const {
  MessageRoutes
} = require("./index.routes")

module.exports = () => {
  const router = express.Router();
  const apiRoutes = express.Router();

  apiRoutes
    .use(express.json())
    .use(cors())
    .use(helmet())
    .use(compression());

    apiRoutes.use('/home', MessageRoutes());

    router.use("/api", apiRoutes);

    return router;

}