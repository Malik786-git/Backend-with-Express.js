import express from "express";
import { currentStudent, addStudent, delStudent } from "../controllers/studentcon.js";



const router = express.Router();

router.get('/current', currentStudent);
router.post('/add', addStudent);
router.delete('/delete/:id([0-9]{2})', delStudent);



export default router;