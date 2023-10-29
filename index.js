// without using any third party library here we are setting up an http server  

const http = require('http')  // here we are creating http module which is an internal module that can actually help us to prepare a good setup 
//                                interms of setting up our own http server , and we can actually setup the http server using http module

const PORT = 3000

// and now what actually this server does is or we can say what actually this module does is it has a function called as createServer and this function actually return a 
// object, and takes a callback as an argument and this callback function is called as request listener function 

// now what is the request listener>
// --> request listener means whenever we make an http request that http request is going to be collected by this callback function 

const server = http.createServer( function listener(request,response){

    // request --> we will be able to get details of incoming http request
    // response --> we will be configuring what reaponse we need to send for an incoming http request

    // whatever request we are making to this server that is going to execute this listener function 

    // console.log(request,"Incoming request details")
    // console.log(response, "Response object details")
    // console.log("request recieved")

    // as an o/p we can see many things getting printed and in that you can see we have a URL : "/" , METHOD : "GET" and we know that through browser we can only make GET
    // requests

    if(request.url == "/home"){
        // suppose if someone makes the requset with "/home" as url we want to return "welcome home"
        response.end("welcome to home")
        // now if we make a request as ( localhost:3000/home ) and then press enter we can see that 
    }

} )

// and now what i want is that after running this file i should be able to run an http server and now already we have an server object, now the thing is if you
// remembered the basic computer networks then any computer program that you execute in your computer becomes a process and now if any 
// external environment or any external calls needs to comunicate to a process and every process is communicated via a port number and now what we have to do is
// we have to bind the server object with a port 

server.listen(PORT, function exec(){

    console.log(`server is running on a ${PORT}`)

})   // and this listen function is actually going to start a server and apart from port it also accepts a callback and this callback function is called when we 
// successfully boot up the server on the given port .


// Now let's say if on our terminal we write ( ping google.com ) , then actully we will be getting an ip address of google and if we copy paste on browser we can see
// that actually google.com is opened and now we are able to open it because it has beeen actually hosted by someone and presently we have not hosted our server on internet
// but we can say that currently this server is running on my machine and is not available on the internet that means not anyone out of the world can come up and start
// using it because this server is only accessible to my machine and suppose in any point of time if you want to communicate with your own machine then the ip address
// you have to give should be (127.0.0.1) ,it connects to the server of our machine.And now on my machine what is the port number? It is 3000 and now if you do
// ( 127.0.0.1:3000 ) and the if we copy paste it to the browser and then if you press enter you can see that it actually connets to the server and it prints
//  "request recieved" which we have written is listener callback function and now we can that from our own machine browser is acting like a client and this nodeJs 
// process is acting as a server 
// Now instead of writing (127.0.0.1:3000) we can write ( localhost:3000 )