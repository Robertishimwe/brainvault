const { Router } = require("express");

const { retrieveControllers } = require("../../controller/pinecone/pineconeRetrieve.controller");

const router = Router();

router.post("/", retrieveControllers.retrieveVector);

module.exports =  router;
