// 1)import json-server
const jsonServer=require('json-server') //using require method json-server is imported in to the variable jsonServer

//2) create json server
const mediaPlayerServer =jsonServer.create();

//create a connection to db.json.It uses a method named router 
const router =jsonServer.router('db.json');

//4)create a middleware
const middleware=jsonServer.defaults();// middleware is a intermediate layer.it is used to send and receive request

//5 use this middleware
mediaPlayerServer.use(middleware)
mediaPlayerServer.use(router)

const port=5000;

mediaPlayerServer.listen(port,()=>{
    console.log(`server is up and running in port ${port}`);
})