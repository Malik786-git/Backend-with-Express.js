import express from "express";
import student from './routes/student.js';

const app = express();
const port = process.env.PORT || '3000';

app.use('/student', student);


app.listen(port, ()=>{
    console.log('my app running on localhost:3000');
})

