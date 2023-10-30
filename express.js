const express =require("express")
// now this express is nothing but a function

const PORT = 4000;

const app = express() //create a express server object

// now the only thing is here we will not be sending the listener function instead we will listening to the requests like


const myLogger = (req,res,next)=>{
  console.log("logging from middleware 1")
  return res.json({
    msg : "sending req from middleware1"
  })
  next() // calls the next middleware
}

const extLogger = (req,res,next)=>{
 console.log("logging from middleware 2")
 next()
}


app.get("/home",myLogger,extLogger,(req,res)=>{
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

// Now let's see what happen if we write return res.json({msg : "sending req from middleware1"}) , now what happens is 
// we actually return res.json({msg : "sending req from middleware1"}) necause next() function is never called

// Why we need Middlewares
// --> We can say that middlewares are our first line for defence and the last middleware will be considered as an
//     CONTROLLER , because last MIDDLEWARE is the one who finally sends the request to the backend and now we can say
//     why do we need the remaining Middlewares it's because suppose from frontend we are making an post request where
//     we are sending name,email,pwd  which are manadatory and now let's say the user is not going to send these details
//     at that time we will not process the request because it's not the error from backend it's actually an error from
//     client side so what we do is we do request VALIDATIONS through the middle wares if it not matches the validations 
//     from middleware we send the response back with some msg

// Controllers
// --> Forward requests to backend logic like models , and also it prepares the response object . Now what happens is
//     we got a request and the we validated the request in the middleware and then middleware forwards it to the
//     controller and initially controller what it will do is it will forward it to the backend layer and then some
//     processing will be done and after the processing is done the model layer is going to return some response to
//     the controller and what controller does is controller will take this response and it will form a JSON where
//     we will setting up the actual data which we will send 



// Models 
// -->  the FIRST layer of this model is actually called as SERVICES
// inside our services we will write our BUISNESS LOGIC and these services will depend on another layer called as repository
// and the actual role of the Repository layer is do DB interactions 