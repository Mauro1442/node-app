const usersModel = require("../models/usersModel");
module.exports = {
  getAll: async function (req, res, next) {
    try {
      const users = await usersModel.find();
      res.status(200).json(users);
    } catch (e) {
      console.log(e);
    }
  },
  getCategories: function (req, res, next) {
    res.send("respond with a resource users");
  },
  getById: async function (req, res, next) {
    console.log(req.params.id);
    try {
      const users = await usersModel.findById(req.params.id);
      res.status(200).json(product);
    } catch (e) {
      console.log(e);
    }
  },
  create: async function (req, res, next) {
    try {
      const users = new usersModel({
        name: req.body.name,
        lastname: req.body.lastname,
        password: req.body.password,
        email: req.body.email,
      });
      const document = await users.save();
      console.log(req.body);
      res.status(201).json(document);
    } catch (e) {
      console.log(e);
      res.json(e.message);
    }
  },
  update: async function (req, res, next) {
    console.log(req.body);
    try {
      const document = await usersModel.updateOne(
        { _id: req.params.id },
        req.body
      );
      res.status(200).json(document);
    } catch (e) {
      console.log(e);
    }
  },
  delete: async function (req, res, next) {
    console.log(req.params.id);
    try {
      const document = await usersModel.deleteOne({ _id: req.params.id });
      res.status(200).json(document);
    } catch (e) {
      console.log(e);
    }
  },
};
