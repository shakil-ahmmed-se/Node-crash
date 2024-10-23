import http from 'http';
import fs from 'fs/promises';
import url from 'url';
import path from 'path';
const PORT = process.env.PORT;


const server = http.createServer(async (req, res)=> {

    // console.log(req.url);
    // console.log(req.method)

    // Get current path

    const __filename = url.fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    // console.log('file name and dirtory onam',__filename, __dirname)


    try {
        // check if get request
        if(req.method === 'GET'){
            let filePath;
            if(req.url === '/'){
                // res.writeHead(200,{'Content-Type': 'text/html'})
                // res.end('<h1>Homepage</h1>');

                filePath = path.join(__dirname, 'public', 'index.html');
                // console.log(filePath)
                
            }
            else if(req.url === '/about'){
                // res.writeHead(200, {'Content-Type': 'text/html'});
                // res.end('<h1>AboutPage</h1>');

                filePath = path.join(__dirname, 'public', 'about.html');
            }
            else{
                // res.writeHead(404, {'Content-Type': 'Text/html'});
                // res.end('<h1>404 Not Found</h1>');
                throw new Error('Not found')
            }

            const data= await fs.readFile(filePath);
            res.setHeader('Content-Type', 'text/html');
            res.write(data);
            res.end();

        }else{
            throw new Error("Method not Allowed");
        }
    } catch (error) {
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.end('Server Error')
    }


})

server.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
 });
