import express from "express"
import morgan from "morgan";
import homeRoutes from "./routes/home.js"

const app = express()
const PORT = 4000;

 
app.use(express.json())

//ab ye detail dedega route knsa hai kitna time liya isko app level pr chlaya hai 
app.use(morgan('tiny'))

app.get("/", (req, res) => {
   //since we added middleware only here and ended the cycle in midleware so it wont work on get req only now 



   //middleware added that in request
   console.log("req.request by", req.requestBy);
   
   res.status(200).send("task")

   //res bhejna zaroori hai 



})

app.use("/home", homeRoutes)




app.listen(PORT, () => {
   console.log("Working From Port ", PORT);

})