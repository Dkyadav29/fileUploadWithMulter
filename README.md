# fileUploadWithMulter

step1: first create the folder stractureof our project 

a> server.js is main entry point of ouer project
 Also server is start from in for the creation of server use the express

step2: after it create a models folder for the create the schema for the our project

look like ---> user.js file
hold the schema of user 
  <!-- const mongoose = require("mongoose");

// this is User Schema
const userSchema = new  mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, require: true },
  password: { type: String, require: true },
  isLogin: { type: Boolean,  default: false },
},
{timeStamp : true});

// below code help to export this module
module.exports = mongoose.model("users", userSchema);

     -->


     mongoose use for the "Using mongoose , a user can define the schema for the documents in a particular collection. It provides a lot of convenience in the creation and management of data in MongoDB. On the downside,"

     similary for fileUpload ofits schema 


     