var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  const users = [
    {
      id: 1,
      name: "Juan Soria",
      email: "jsoria@gmail.com",
      password: "jbiv6tolb",
    },
  ];
  res.json(users);
});

router.post("/", function (req, res, next) {
  console.log(req.body);
  res.status(201).json(req.body);
});
router.put("/:id", function (req, res, next) {
  console.log(req.body);
  res.status(201).json(req.body);
});
router.delete("/:id", function (req, res, next) {
  console.log(req.params.id);
  const user = {
    id: 1,
    name: "Juan Soria",
    email: "jsoria@gmail.com",
    password: "jbiv6tolb",
  };
  res.status(201).json(user);
});

module.exports = router;
