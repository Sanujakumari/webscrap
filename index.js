import express from "express";
import {MongoClient} from "mongodb"
import dotenv from "dotenv" ;
import fetch from 'node-fetch';
dotenv.config();
console.log(process.env);
const app = express();

// const response=await fetch('https://api.rainforestapi.com/request?api_key=5D562933667A44829A1ABF28B850EADD&type=product&amazon_domain=amazon.in&asin=B097RD2JX8')
// const r1=await response.clone();
// const results=await Promise.all([response.json(),r1.json()])
// console.log(results[0]);

var obj;

fetch('https://api.rainforestapi.com/request?api_key=5D562933667A44829A1ABF28B850EADD&type=product&amazon_domain=amazon.in&asin=B097RD2JX8')
  .then(res => res.json())
  .then(data => obj = data)
  .then(() => console.log(obj))

app.get("/amazon_product",(request,response)=>{
             response.send(obj);
     }
    )

const PORT =  9000;
//const MONGO_URL="mongodb://localhost"
// const MONGO_URL=process.env.MONGO_URL;
const MONGO_URL="mongodb+srv://sanuja-webscrap:webscrap@cluster0.rnvrh.mongodb.net";
async function createConnection(){
    const client= new MongoClient(MONGO_URL);
    await client.connect();
    console.log("Mongodb Connected")
// const product=await client
// .db("WEBSCRAP")
// .collection("amazon_product")
// .findOne({Deal_Price:"₹1,39,900.00"});
// console.log(product)
 }
 createConnection();




// app.get("/amazon_product/1",(request,response)=> {
//     console.log(request.query);
//     const{Deal_Price}=request.query;
//     let filteredProduct=amazon_product;

// if(title){
//     filteredProduct=filteredProduct.filter((product)=>product.title===title)
// }   
// response.send(filteredProduct);
// if(brand){
//     filteredProduct=filteredProduct.filter((product)=>product.brand===brand)
// }   
// response.send(obj(filteredProduct));
// // response.send(amazon_product.filter((product)=>product.Deal_Price===Deal_Price));
// }
// )
// app.get("/", (request, response) => {
//     response.send("Hello world  🌎");
//   });
   app.listen(PORT, () => console.log("The server is started in ", PORT));
