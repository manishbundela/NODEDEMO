const express=require('express');
const app=express();

// Set EJS as templating engine
app.set('view engine', 'ejs');


app.get("/",(req,resp)=>{
    const user={
        name:'manish',
        email:'manish@gmail.com',
        city:'Bhopal',
        skill:['PHP','JAVA','NODEJS','MONGODB']
    }
    resp.render('profile',{user});
});


//add different Pages
app.get("/main",(req,resp)=>{
    resp.render('main');
});

app.listen(8080);