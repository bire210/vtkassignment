
import express from 'express';
const {bookModel}=require("../models/bookModel")
export const create= async (req: express.Request, res: express.Response) => {
    const {title, creatorId,role } = req.body;

   try {
    if (!role.includes('CREATOR')) {
        return res.status(403).json({ message: 'You are not auhtorize for this' });
      }else{
        const newBook=new bookModel({
          title,creatorId
        })
        const saved=await newBook.save();
        res.status(200).json({book:req.body,message: 'Book created successfully'})
      }

   } catch (error) {
     res.status(500).json({message:error.message})
   }
  
   
    
  }

  export const getBook=async(req: express.Request, res: express.Response)=>{
    const {creatorId,role } = req.body;
    const { old, new: isNew } = req.query;
    
    try {
        if (role.includes('VIEW_ALL')) {
            //    fetch all books
            if(old){
             
              const tenMinutesAgo = new Date(Date.now() - 10 * 60 * 1000);
            const oldbook=await  bookModel.find({
                createdAt: { $lte: tenMinutesAgo }
              });
              res.status(200).json({older:oldbook})            
            }else if(isNew){
              const tenMinutesAgo = new Date(Date.now() - 10 * 60 * 1000);
              const newBooks=await bookModel.find({
                createdAt: { $gte: tenMinutesAgo, $lte: new Date() }
              });
              res.status(200).json({latest:newBooks})
            }else{
              const allBook=await bookModel.find().populate("creatorId");
              res.status(200).json({mes:allBook})
            }
             
              } else if (role.includes('VIEWER')) {
                  // fetch the only that user is created
                if(old){
              //  older book
              const tenMinutesAgo = new Date(Date.now() - 10 * 60 * 1000);
                 const olderbook=await bookModel.find(
                   {
                    createdAt: { $lte: tenMinutesAgo },
                     creatorId : creatorId 
                  } 
                     );

                     res.status(200).json({older:olderbook})

                }else if(isNew){
                  // newr book
                    const tenMinutesAgo = new Date(Date.now() - 10 * 60 * 1000);
                     const newBook=await bookModel.find(
                      {
                        createdAt: { $gte: tenMinutesAgo, $lte: new Date() },
                        creatorId : creatorId 
                     } 
                        );

                    res.status(200).json({latest:newBook})
                }else{
                  const bookCreated= await bookModel.find({creatorId}).populate("creatorId")
                  res.status(200).json({mes:bookCreated})
                }
              
                
              } else {
                return res.status(403).json({ message: 'Forbidden' });
              }
            
        
    } catch (error) {
        res.status(500).json({message:error.message})
    }

  
  }