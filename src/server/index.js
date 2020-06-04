const express = require("express");
const {PORT} = require("../config/index");

class Server {

  constructor(router){
    this.app = express().use(router);
  }

  start(){
    return new Promise(resolve => {
      this.app.listen(PORT, ()=> {
        console.log('app runing on ' + PORT);
      });

      resolve();
    });
  }
}


module.exports = Server;