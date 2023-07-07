require('dotenv').config()
import express, { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

const authenticate = (req: Request, res: Response, next: any) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'Missing or invalid authentication token' });
    }

    const token = authHeader.split(' ')[1];
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)as {id :String,role:[]}
        req.body.creatorId=decoded.id;
        req.body.role=decoded.role;
      console.log(decoded)
      next();
    } catch (error) {
      return res.status(401).json({ message: 'Invalid authentication token' });
    }
  };


  module.exports={authenticate}