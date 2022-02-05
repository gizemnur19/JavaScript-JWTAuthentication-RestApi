const db = require("../models");
const User = db.user;
const Role = db.role;

exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
  return User.find().then((users) => {
    if (users) {
        res.send({ success: true, users: users })
    } else {
        res.send({ success: false, message: "Kullanıcı yoktur." })
    }
});
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};
