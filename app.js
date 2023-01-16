require('dotenv').config();
require('express-async-errors')

const express = require('express')
const app = express();

const connectDB = require('./db/connect')
const animeRouter = require('./routes/anime')

//middlewares
const errorHandlerMiddleware = require('./middleware/error-handler')
const notFoundMiddleware = require('./middleware/not-found')

//middleware
app.use(express.json())

//routes
app.get('/',(req,res)=>{
    res.send('<h1>HELLO</h1><a href="/api/animes">Anime</a>')
})

app.use('/api/anime',animeRouter);

//error routes
// app.use(errorHandlerMiddleware)
// app.use(notFoundMiddleware)

const port = process.env.PORT || 5000
const MONGO_URI= "mongodb+srv://vipin:1234@nodeexpressproject.bo8a64v.mongodb.net/AnimeDB?retryWrites=true&w=majority"
const start = async () => {
    try {
      // connectDB
      await connectDB(MONGO_URI);
      app.listen(port, () => console.log(`Server is listening port ${port}...`));
    } catch (error) {
      console.log(error);
    }
  };

start();

