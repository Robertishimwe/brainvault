import express from "express";

import dashboardController from "../../controller/dashboard";

import verify from "../../middleware/authenticator";

const router = express.Router();

router.get("/", dashboardController.mainDashboardHandler);

module.exports = router;

