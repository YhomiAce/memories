import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

import conn from './config/database.js';
import postRoutes from './routes/posts.js';

conn();

const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));

app.use('/posts', postRoutes);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Started on Port: ${PORT}`))