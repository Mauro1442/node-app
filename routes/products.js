var express = require("express");
var router = express.Router();

/* GET products listing. */
router.get("/", function (req, res, next) {
  const products = [
    {
      id: 1,
      name: "at2035",
      price: 100,
    },
    {
      id: 2,
      name: "sm7b",
      price: 300,
    },
  ];
  res.json(products);
});
router.get("/categories", function (req, res, next) {
  res.send("respond with a resource products");
});
router.get("/:id", function (req, res, next) {
  console.log(req.params.id);
  const producto = {
    id: 1,
    name: "at2035",
    price: 100,
  };
  res.status(200).json(producto);
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
  const product = {
    id: 1,
    name: "at2035",
    price: 100,
  };
  res.status(201).json(product);
});

module.exports = router;
