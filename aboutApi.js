 const http = require('http');


 const userData = [
    {
        name:"Anshu kumar",
        age:23,
        email:"anshu@gmail.com"
    },
     {
        name:"sunil kumar",
        age:25,
        email:"sunil@gmail.com"
    },
     {
        name:"aniket kumar",
        age:15,
        email:"aniket@gmail.com"
    },
     {
        name:"suraj kumar",
        age:10,
        email:"suraj@gmail.com"
    }

 ]
 http.createServer((req,resp)=>{
    resp.setHeader("Content-Type","application/json")
    resp.write(JSON.stringify(userData));
    resp.end();
 }).listen(5200)
