filter1=(request,response,next)=>{
    if(!request.query.age){
        response.send('Please Provde valid Age!');

    }else if(request.query.age<=18){
        response.send('Age is less then 18!');
    }else{
        next();
    }
}

module.exports= {
    reqfilter1:filter1
}