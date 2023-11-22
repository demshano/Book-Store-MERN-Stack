import express from 'express';
import { Book } from '../model/bookModel.js';
const router = express.Router();

    //Route for save a book

    router.post('/', async (request,respone)=>{
        try
        {
                if(
                    !request.body.title ||
                    !request.body.author ||
                    !request.body.publishYear
                )
                {
                    return respone.status(400).send({
                        message:'send all required fields: title,author and publish year'
                    })
                }

                const newBook={
                    title:request.body.title,
                    author:request.body.author,
                    publishYear:request.body.publishYear,
                }

                const book = await Book.create(newBook);

                return respone.status(201).send(book);

        }
        catch(error)
        {
            console.log(error.message);
            respone.status(500).send({message: error.message})
        }
    });

    //route for get all books from database
    router.get('/', async (request, respone)=>{
    try
    {
        const books = await Book.find({});
        return respone.status(200).send({
            count:books.length,
            bookData:books,
        });
    }
    catch(error)
    {
        console.log(error.message);
        respone.status(500).send({message: error.message});
    }
    });

    //route for get  book from it's id from database
    router.get('/:id', async (request, respone)=>{
        try
        {
            const {id} = request.params;
            const book = await Book.findById(id);
            return respone.status(200).send(
                book
            );
        }
        catch(error)
        {
            console.log(error.message);
            respone.status(500).send({message: error.message});
        }
    });

    //route for update a book in db
    router.put('/:id',async (request, respone)=>{
        try
        {
            if(
                !request.body.title ||
                !request.body.author ||
                !request.body.publishYear
            )
            {
                return respone.status(400).send({
                    message:'send all required fields: title,author and publish year'
                })
            }
            const {id}=request.params;
            const result = await Book.findByIdAndUpdate(id, request.body);

            if(!result)
            {
                return respone.status(404).json({message: 'book not found'});
            }
            return respone.status(200).send({message: 'book was updated succesfully'})
        }
        catch(error)
        {
            console.log(error.message);
            respone.status(500).send({message: error.message})
        }
    });

    //route for delete a book
        router.delete('/:id', async (request, respone)=>{
        try
        {
            const {id} = request.params;
            const result = await Book.findByIdAndDelete(id, request.body);

            if(!result)
            {
                return respone.status(404).json({message: 'book was not found'})
            }
            return respone.status(200).send({message: 'book deleted succesfully'});

        }
        catch(error)
        {
            console.log(error.message);
            return respone.status
        }
    });

    export default router;
