import express, { request } from 'express';
import mongoose from 'mongoose';
import { Book } from './model/bookModel.js';
import  bookRoutes  from './routes/bookRoutes.js';
import { PORT, mongodbURL } from './config.js';
import cors from 'cors';

    const app = express();
    
    //Midlleware for parsing request body
    app.use(express.json());
    //this will allow the express to use the json

    // app.use(cors(
    //     {
    //         origin: 'https://localhost:3000', // Specify the allowed origin (or '*' for any origin)
    //         methods: ['GET,PUT,POST,DELETE'], // Specify the allowed HTTP methods
    //         allowedHeaders: ['Content-Type'], // Specify the allowed headers in the request
    //     }
    
    // )) 
    
    app.get('/', (request, response)=>{
        console.log(request);
        return response.status(235).send('welcome to Book store');
    });

    app.use('/books', bookRoutes);

    
    
    


    mongoose.connect(mongodbURL)
    .then(()=>{
            console.log('database is connected!');
            app.listen(PORT, ()=>{
                console.log(`the app is running port ${PORT}`);
            })
    })
    .catch((error)=>{
            console.log(error);
    })
