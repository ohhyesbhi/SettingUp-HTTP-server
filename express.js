const express =require("express")
// now this express is nothing but a function

const PORT = 4000;

const app = express() //create a express server object

// now the only thing is here we will not be sending the listener function instead we will listening to the requests like


app.get("/home",(req,res)=>{
    // here we have send instead of end
   // res.send("welcome to express GET method")

    // suppose if we want to send JSON then
      res.json({
        msg:"this is GET method"
      })
})

app.post("/home",(req,res)=>{
    // here we have send instead of end
    // res.send("welcome to express POST method")

    // suppose if we want to send JSON
    res.json({
        msg:"this is POST method"
    })
})

// through postman if we make these requests we can see these outputs

app.listen(PORT,()=>{
  console.log("it is running on PORT number",PORT)
})
