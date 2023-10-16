"use strict";

var _require = require("express"),
  Router = _require.Router;

// const { uploadControllers } = require("../controller/pineconeUpload.controller");
var _require2 = require("../../controller/pinecone/pineconeUpload.controller"),
  uploadControllers = _require2.uploadControllers;
var _require3 = require("../../controller/pinecone/pineconePdfUpload.controller"),
  uploadPDFControllers = _require3.uploadPDFControllers;
var _require4 = require("../../controller/pinecone/pineconeUploadtext.controller"),
  uploadtxtControllers = _require4.uploadtxtControllers;
var router = Router();
router.post("/", uploadControllers.uploadVector);
router.post("/text", uploadtxtControllers.uploadVector);
router.post("/pdf", uploadPDFControllers.uploadVectorToPinecone);
module.exports = router;