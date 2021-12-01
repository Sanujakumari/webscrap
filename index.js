import express from "express";
import {MongoClient} from "mongodb"
import dotenv from "dotenv" ;
import fetch from 'node-fetch';
import cors from "cors";

dotenv.config();
console.log(process.env);
const app = express();
app.use(express.json());

app.get("/welcome", (request, response) => {
         response.send("Hello world  🌎");
       });


var obj;

fetch('https://api.rainforestapi.com/request?api_key=5D562933667A44829A1ABF28B850EADD&type=search&amazon_domain=amazon.in&search_term=mobiles&sort_by=price_high_to_low')
  .then(res => res.json())
  .then(data => obj = data)
  .then(() => console.log(obj))

app.get("/",(request,response)=>{
             response.send(obj);
     }
    )
   
//     app.post(async(request,response)=>{
//         const data=request.body;
//         const result=await database(data);

//         response.send(result);
// }
// )
// async function database(data){
//     console.log(data);
//   const result = await client
//     .db("webscraap")
//     .collection("product")
//     .insertMany(data);
//   return result;
// }

const PORT = process.env.PORT || 9000;
//const MONGO_URL="mongodb://localhost"
const MONGO_URL=process.env.MONGO_URL;
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
//
   app.listen(PORT, () => console.log("The server is started in ", PORT));
