var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index");
});

router.post("/join-chat", function (req, res, next) {
  const name = req.body.username;
  console.log(name);
  res.render("chat-room", { user: name });
});



module.exports = router;
