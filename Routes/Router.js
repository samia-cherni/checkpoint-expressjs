const express = require("express");
const router = express.Router();
// Routes Definitions
router.get("/", (req, res) => {
  res.render("Home", { title: "Home" });
});
router.get("/Services", (req, res) => {
  res.render("Services", { title: "Our Services" });
});
router.get("/Contact", (req, res) => {
  res.render("Contact", { title: "Contact Us" });
});
router.get("*", (req, res) => {
    res.render("Notfound", { title: "Something went wrong" });
  });
module.exports=router;
