const express = require("express")
const path = require("path");
const app = express();

// app.use(express.json())
 const notes=[]; // array to store notes

 app.post('/notes' , function(req , res){
    const note = req.body.note;
    notes.push(note);
    res.message = "note added";
 })

 app.get('/notes' , function(req , res){
    res.send(notes);
 })


 app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "index.html"));
});


app.listen(3000 , ()=>{
    console.log("server is up and running")
})
