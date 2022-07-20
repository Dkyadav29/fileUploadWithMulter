const mongoose = require("mongoose");
const User = require("../models/user");
const express = require("express");
const app = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
 const path = require('path') 

//const { RegisterValidation, LoginValidation} = require("../middleware/validation");
// hold the logic of user register
exports.register = async(req, res) => {
  // const { error } = RegisterValidation(req.body);
  // if (error) return res.status(400).send(error.details[0].message);

  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send(" Email is already exist");
  // const salt = await bcrypt.genSalt(10);
  // const hashedPass = await bcrypt.hash(req.body.password, salt);
  //Encrypt user password
  //let encryptedPassword = await bcrypt.hash(req.body.password, 15);
  const user = await new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  });
  try {
    const saveduser = await user.save().then((user) => {
      res.json({ user });
    });
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.login = async (req, res) => {
  const { error } = LoginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const users = await User.findOne({ email: req.body.email });
  if (!users) return res.status(400).send("Email is not valid");

  const pass = await bcrypt.compare(req.body.password, users.password);
  if (!pass) res.status(400).send("Password is Incorrect");

  User.findOneAndUpdate(
    { email: req.body.email },
    { isLogin: true },
    (err, data) => {
      if (err) console.log(err);
      else console.log("Successfully updated the isLogin");
    }
  );

  const token = jwt.sign({ _id: User._id }, process.env.SECRET);
  res.cookie("auth", token, { httpOnly: true }).status(200).json({
    message: "Succesfully Login",
    token,
  });
};

// for the upload file 
 exports.upload =   async (req, res) => {
    try {
      await uploadFile(req, res);
  
      if (req.file == undefined) {
        return res.status(400).send({ message: "Please upload a file!" });
      }
  
      res.status(200).send({
        message: "Uploaded the file successfully: " + req.file.originalname,
      });
    } catch (err) {
      console.log(err);
  
      if (err.code == "LIMIT_FILE_SIZE") {
        return res.status(500).send({
          message: "File size cannot be larger than 2MB!",
        });
      }
  
      res.status(500).send({
        message: `Could not upload the file: ${req.file.originalname}. ${err}`,
      });
    }
  };
  
