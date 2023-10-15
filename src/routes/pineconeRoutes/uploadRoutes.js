const { Router } = require("express");

// const { uploadControllers } = require("../controller/pineconeUpload.controller");
const { uploadControllers } = require("../../controller/pinecone/pineconeUpload.controller");
const { uploadPDFControllers } = require("../../controller/pinecone/pineconePdfUpload.controller");
const { uploadtxtControllers } = require("../../controller/pinecone/pineconeUploadtext.controller")

const router = Router();

router.post("/", uploadControllers.uploadVector);
router.post("/text", uploadtxtControllers.uploadVector);
router.post("/pdf", uploadPDFControllers.uploadVectorToPinecone);


module.exports =  router;
