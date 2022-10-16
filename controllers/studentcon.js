const currentStudent = (req, res)=>{
       res.send('show current student!');
}

const addStudent = (req, res)=>{
       res.send('add new student!');
}

const delStudent = (req, res)=>{
       res.send('delelte student!');
}

export {currentStudent, addStudent, delStudent};