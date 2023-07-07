import express from 'express';
const bookRouter=express.Router()
import { create,getBook } from '../controllers/booksControl';
const {authenticate}=require("../middlewares/authenticate")
bookRouter.post("/",authenticate,create)
bookRouter.get("/",authenticate,getBook)

module.exports=bookRouter