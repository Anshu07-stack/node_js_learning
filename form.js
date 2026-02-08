const http =  require('http');
const fs = require('fs');
const queryString = require('querystring')


http.createServer((req,resp)=>{
    fs.readFile('html/form.html','utf-8',(error,data)=>{
       
        if(error){
             resp.writeHead(200,{"content-type":'text/plain'},)
            resp.end('internal server error')
            return;
        }
        if(req.url == '/'){
         resp.writeHead(200,{"content-type":"text,html"})
         resp.write(data)
        }else if(req.url == '/submit'){


            let dataBody = [];
            req.on('data',(chunk)=>{
                dataBody.push(chunk)
            });


            req.on('end',()=>{
                let rawData = Buffer.concat(dataBody).toString()
                let readableData = queryString.parse(rawData)
                console.log(`This is rawData ----`,rawData)
                console.log("this is readableData -----", readableData)

                resp.writeHead(200,{"content-type":"text/html"});
                resp.end(`
                <h1>Data Submitted</h1>
                <p><b>Name:</b> ${readableData.name}</p>
                <p><b>Email:</b> ${readableData.email}</p>
            `)
              
            })
        // resp.write('<h1>Data Submited</h1>')
    } 
    //  resp.end()
    })
    
}).listen(3200)

// http.createServer((req,resp)=>{
//     resp.writeHead(200,{"content-type":'text/html'},)
//     console.log(req.url)
//     if(req.url == '/'){
//          resp.write(`
//         <form action="/submit" method="post">
//         <input type="text" placeholder="Enter Name" name="name" />
//         <input type="text" placeholder="Enter Email" name="email" />
//         <button>Submit</button>
//         </form>
//         `)
//     }else if(req.url == '/submit'){
//         resp.write('<h1>Data Submited</h1>')
//     }
   
//     resp.end()
// }).listen(5600)