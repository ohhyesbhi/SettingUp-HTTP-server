const express =require("express")
// now this express is nothing but a function

const PORT = 4000;

const app = express() //create a express server object

// now the only thing is here we will not be sending the listener function instead we will listening to the requests like


app.get("/home",myLogger,extLogger,(req,res)=>{
    // here we have send instead of end
   // res.send("welcome to express GET method")

    // suppose if we want to send JSON then
      res.json({
        msg:"this is GET method"
      })
})

const myLogger = (req,res,next)=>{
  console.log("logging from middleware 1")
  next() // calls the next middleware
}

const extLogger = ()=>{
 console.log("logging from middleware 2")
 next()
}

app.post("/home",(req,res)=>{
    // here we have send instead of end
    // res.send("welcome to express POST method")

    console.log("last middleware")
    res.json({
        msg:"this is POST method"
    })
})

// through postman if we make these requests we can see these outputs

app.listen(PORT,()=>{
  console.log("it is running on PORT number",PORT)
})

// let us now learn about middlewares


// now we can see that we have set up two middle ware functions and now what we want is when somebody hits app.get("/home")
// my request first go to myLogger and then to extLogger and from there it should go to lasteMiddleware and now whenever
// we run the server we can see that in 
// so when we made a request to app.get("/home") our request got forwarded to myLogger and then it prints ("logging from middleware 1")
// and then it forwards your request to next middleware which is extLogger and then it prints ("logging from  middleware 2")
// and the it fowards to nect middleware which is the last one where we actuallty print ("last middleware") and the we return
// res.json ({msg : "this is get method"})

// Now let's see what happen if we write return res.json({msg : "sending req from middleware1"})