const http = require('http');
const fs = require('fs');


const app = http.createServer((req, res) => {
    console.log(req.url, req.method);

    if (req.url === '/') {
        //set header
     res.writeHead(200, {'Content-Type':'text/plain'});

         res.write('HELLO WORLD !');
          res.end();
        
    }else if (req.url === '/me') {
        //set header
     res.writeHead(200, {'Content-Type':'application/json'});


        fs.readFile('./data/me.json', (err, data) => {
            if (err) {
                console.log(err);
                res.statusCode = 400;
                res.end();
            }else {
     
                res.end(data.toString());
            }
       });
        
    }else if (req.url === '/screenshot') {
        //set header
     res.writeHead(200, {'Content-Type':'text/html'});

        // read html file
        fs.readFile('./views/screnshot.html', (err, data) => {
            if (err) {
                console.log(err);
                res.statusCode = 400;
                res.end();
            }else {

                res.end(data);
                
            }
       });  

    }else{
            //set header
     res.writeHead(400, {'Content-Type':'text/plain'});
        res.write('End Of URL !');
        res.end();
    }
  
});

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});

