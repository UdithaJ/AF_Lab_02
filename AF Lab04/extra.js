
const os = require('os')
console.log(os.cpus());

//=========================
const http = require('http');
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    if (req.method === 'POST') {

        req.on('data', data => {
            res.write('<h1>Hello '+data+'</h1>')
            res.end(data);

        });

    }
    else {
        res.end(`
        <!doctype html>
        <html>
        <body>
            <form action="/" method="post">
                <input type="text" name="name" /><br />
                <button>Submit</button>
            </form>
        </body>
        </html>
      `);
    }
});
server.listen(3000,(err) => {
    if(err){
        console.log(err);
    }
    console.log("Server is running...")
})

//=============================================