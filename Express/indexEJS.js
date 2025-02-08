const express=require('express');
const app=express();

// Set EJS as templating engine
app.set('view engine', 'ejs');


app.get("/",(req,resp)=>{
    const user={
        name:'manish',
        email:'manish@gmail.com',
        city:'Bhopal'
    }
    resp.render('profile',{user});
});

app.listen(8080);