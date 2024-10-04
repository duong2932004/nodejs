const express = require("express");
const router = express.Router();
const {
    getHomePage,
    postCreateUser,
    getCreateUser,
    getUpdatePage,
    postUpdateUser,
    postDeleteUser,
} = require("../controllers/homeController");

router.get("/", getHomePage);
router.post("/create-user", postCreateUser);
router.get("/create", getCreateUser);
router.get("/update/:id", getUpdatePage);
router.post("/update-user", postUpdateUser);
router.post("/delete-user", postDeleteUser);
module.exports = router;
