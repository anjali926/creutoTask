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
      //Extract query params
    const {
      search,
      author,
      from,
      to,
      page = 1,
      limit = 10,
      sortBy = "name",
      order = "asc"
    } = req.query;

    //Build filter object
    const filter = {};

    //Search in name & description
    if (search) {
      filter.$or = [
        { name: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } }
      ];
    }
    //Filter by author
    if (author) {
      filter.author = { $regex: `^${author}$`, $options: "i" };
    }
   //Filter by publish date range
    if (from || to) {
      filter.publishDate = {};
      if (from) filter.publishDate.$gte = new Date(from);
      if (to) filter.publishDate.$lte = new Date(to);
    }

    //Pagination logic
    const pageNumber = parseInt(page);
    const pageSize = Math.min(parseInt(limit), 50);
    const skip = (pageNumber - 1) * pageSize;

    //Sorting logic
    const sortOrder = order === "desc" ? -1 : 1;
    const sortOptions = { [sortBy]: sortOrder };

    //Query DB
    const books = await Book.find(filter)
      .sort(sortOptions)
      .skip(skip)
      .limit(pageSize);
      const total = await Book.countDocuments(filter);

    // Response
    res.status(200).json({
      page: pageNumber,
      limit: pageSize,
      total,
      results: books
    });
    }catch(error){
      res.status(500).json({
            message:error.message
        })
    }
};