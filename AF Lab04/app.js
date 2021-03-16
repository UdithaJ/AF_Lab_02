//1.c
console.log("Hello World");

//2.a ===================================
const os = require('os');

//2.b ===================================
console.log('Architecture ' + os.arch());
console.log('CPUs ' + os.cpus().length);
console.log('OS ' + os.platform());

//3.b ===================================
const fs = require('fs');
//3.c
const myFile = __dirname + '/test.txt';

//3.d ===================================
fs.readFile(myFile, (err, data) => {
    if (err) {
        console.error(err);
    }
    console.log("with toString: " + data.toString());
});

//3.e ====================================
fs.readFile(myFile, (err, data) => {
    if (err) {
        console.error(err);
    }
    console.log(data);
});

//3.f ====================================
const data = fs.readFileSync(myFile); // readFileSync() use in special cases
console.log("Reading in synchronus manner: "+data.toString());

//4.a ====================================
const sourceFile = __dirname + '/test.txt';
const destinationFile = __dirname + '/test-copy.txt';

//4.b =====================================
const readStream = fs.createReadStream(sourceFile);
const writeStream = fs.createWriteStream(destinationFile);

readStream.addListener('end',() =>{
    console.log("End of File Read!")
})

writeStream.addListener('close',() =>{
    console.log("End of file write!")
});
//4.c =====================================
readStream.pipe(writeStream); //direct readStream to writeStream

//4.d =====================================
const secondFile = __dirname + '/test-copy.txt';
const copy = fs.readFileSync(secondFile);
console.log(copy === data);

//4.e ==================================
readStream.on('data', data => {
    console.log("readStream: "+data.toString());
});  //Read and Print the readStream

//5.a ====================================
const http = require('http');

//5.b ====================================
http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    switch (req.method) {
        case 'GET':
            res.write('<h1>Hello World</h1>');
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
            break;

        case 'POST':
            req.on('data', data => {
                res.write('<h1>Hello ' + data + '</h1>');
                res.end();
            });
            break;
    }
}).listen(3000, (err) => {

    if(err){

        console.log(err);
    }
    console.log('Server is listening to port 3000')
});
