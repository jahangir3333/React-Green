let express=require("express");
let cors=require("cors");

let app=express();

app.use(cors());
app.use(express.json());


app.post("/",(req,res)=>{
    res.json(req.body)
    console.log(req.body);

}).listen(8080,()=>{
    console.log("Server is running on port 8080");
})