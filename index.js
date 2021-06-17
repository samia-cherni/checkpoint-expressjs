 // Required External Modules

 const express = require('express');
 const path = require('path');

 // App Variables

 const app = express();
 const port = process.env.PORT || "8000";
 const work = require('./Middleware/Workinghours');
 const logger=require('./Middleware/Logger');

   //App Configuration
 
 app.set("views", path.join(__dirname, "views"));
 app.set("view engine", "pug");
 app.use(express.static(path.join(__dirname,'public')));
 app.use(work);
 app.use(logger);
 // Routes Definitions
 
  app.get('/',(req,res)=>{
    res.render('Home',{title:'Home'})
  });
  app.get('/Services',(req,res)=>{
    res.render('Services',{title:'Our Services'})
  })
  app.get('/Contact',(req,res)=>{
    res.render('Contact',{title:'Contact Us'})
  });
  //Server Activation
 
 app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
  });