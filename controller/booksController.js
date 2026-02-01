import  Book  from '../models/bookModel.js'


export const createBook=async(req,res)=>{
    try {
        const {name,description ,author, publishDate }= req.body;
        if(!name || !description || !author || !publishDate){
            return res.status(404).json({
                message:"all feilds are required"
            });
        }
     
        const bookexists= await Book.findOne({ name });
        if(bookexists){
            return res.status(400).json({
                message:"book already exst"
            });
        }
        const newBook= await Book.create({
          name,
          description,
          author,
          publishDate,
        });
         
        res.status(201).json({
            message:"book saved",
            id:newBook._id,
            name:newBook.name,
            description:newBook.description,
            publishDate:newBook.publishDate   
         });
    } catch (error) {
        res.status(500).json({
            message:error.message
        });
    }
};


export const getBook=async(req,res)=>{
    try{

    }catch(error){
      res.status(500).json({
            message:error.message
        })
    }
};