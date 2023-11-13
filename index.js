
//import express from "express";
//import bodyParser, { json } from "body-parser";

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

//Step 1: Run the solution.js file without looking at the code.
//Step 2: You can go to the recipe.json file to see the full structure of the recipeJSON below.

const recipeJSON =
'[{"id":"0001","type":"Student","name":"kanhaiya gawali","education":{"college":{"name":"S.M.Joshi","preparation":"BSc.Computer"},"Skill":{"name":"Web Development","expertice":"Medium"},"Language":[{"name":"Javascript","projects":["To-do List","Quiz App"]},{"name":"Node.js","projects":["Student From","Qr-code App","Server-Side-Handing"]},{"name":"API","projects":["Movie-API","News-API","Movie-API"]},{"name":"EJs","projects":["Band Name Generator","EjS Protofilo"]}]}},{"id":"0002","type":"Student","name":"Kunal gawali","education":{"college":{"name":"M.S.G.college","preparation":"BSc.chemistry"},"Skill":{"name":"Chemical","expertice":"Medium"},"Language":[{"name":"Physics","projects":["Project about Spece","Observation"]},{"name":"Chemical","projects":["Farmer use Fertilizer","Improve soli health"]},{"name":"Math","projects":["Your sell Prediction","Bussiness owener"]},{"name":"Biology","projects":["Human Life Cycle Presentation","Human Body"]}]}},{"id":"0003","type":"Student","name":"Tushare gawali","education":{"college":{"name":"M.S.G.college","preparation":"BA.Economy"},"Skill":{"name":"Public Speech","expertice":"Medium"},"Language":[{"name":"English","projects":["Grammer","Compitition"]},{"name":"Economy","projects":["Share-Market Forcast","Detail Report"]},{"name":"Scology","projects":["Behavioural Study","human Being"]},{"name":"History","projects":["Indian History","Indian Rich"]}]}}]';


const data = JSON.parse(recipeJSON);

console.log(data);

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs'); 



app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/graduation", (req, res) => {
     const action=req.body.choice;
  
      if (action === 'kanhaiya') {
        // Handle action for Button 1
        res.render('index.ejs', { graduation: data[0] });
      } else if (action === 'kunal') {
        // Handle action for Button 2
        res.render('index.ejs', { graduation: data[1] });
      } else  {
        // Handle other actions or errors
        res.render('index.ejs', { graduation: data[2]});
      }     
  //Step 3: Write your code here to make this behave like the solution website.
  //Step 4: Add code to views/index.ejs to use the recieved recipe object.
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});

