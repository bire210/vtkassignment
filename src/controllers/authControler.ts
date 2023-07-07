import express from 'express';
const {userModel}=require("../models/userModel")
const bcrypt=require("bcrypt")
import jwt from "jsonwebtoken";
require('dotenv').config()

export const login = async (req: express.Request, res: express.Response) => {
    const { email, password } = req.body;
    try {
      const data = await userModel.findOne({ email });
      if (data) {
          const hash_pass = data.password;
           bcrypt.compare(password, hash_pass, (err:Error, result:Boolean) => {
          if (result) {
            const token =jwt.sign({ id:data._id,role:data.role}, process.env.JWT_SECRET, {
              expiresIn: "10d",
            });
            let user=data;
            res.status(200).json({
              _id: user._id,
              name: user.name,
              email: user.email,
              token: token ,
            message:"Login Success"
            });
          } else {
            res.status(401).json("Wrong Password");
          }
        });
      } else {
        res.status(404).json("User Does not Exist");
      }
    } catch (error) {
      res.status(404).json("User Does not Exist");
    }
};


export const register = async (req: express.Request, res: express.Response) => {
    const { name, email, password ,role} = req.body;
    try {
      const userExist = await userModel.findOne({ email });
      if (userExist) {
        res.status(400).json("User Already exist");
      } else {
        bcrypt.hash(password, 5, async (err:Error, hash:String) => {
          if (err) {
            res.status(500).json("An Error Occured");
          } else {
            const newUser = new userModel({
              name,
              email,
              role,
              password: hash
            });
            const savedUser = await newUser.save();
            res.status(201).json({  
              _id: savedUser._id,
              name: savedUser.name,
              email: savedUser.email,
              role:savedUser.role,
              message:"Register Success"
          });
          }
        });
      }
    } catch (error) {
      res.status(500).json("An Error occured");
    }
}