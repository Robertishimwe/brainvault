"use strict";

var _require = require("express"),
  Router = _require.Router;
var _require2 = require("../../controller/pinecone/pineconeRetrieve.controller"),
  retrieveControllers = _require2.retrieveControllers;
var router = Router();
router.post("/", retrieveControllers.retrieveVector);
module.exports = router;