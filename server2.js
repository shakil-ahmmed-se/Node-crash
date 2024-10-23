import {createServer} from 'http';
import { escape } from 'querystring';
import { json } from 'stream/consumers';
const PORT = process.env.PORT;
const users = [
    {id:1, name: 'John Doe'},
    {id:2, name: 'Maxlimin'},
    {id:3, name: 'John Week'},
]

const logger = (req, res, next) => {
    console.log(`${req.method} - ${req.url}`);
    next();
}

// JSON middleware

const jsonMiddleware = (req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    next();  
}

// Route handler for GET /api/users
const getUsersHandler = (req, res, next) => {
    res.write(JSON.stringify(users));
    res.end();
}

// Route handler for GET /api/users/:id

const getUserByIdHandler = (res, req) =>{
    // const id = req.url.split('/')[3];
    console.log(req.url)
    // // const user = users.find((user) => user.id === parseInt(id));
    // if(user){
    //     res.write(JSON.stringify(user));
    // }
    // else{
    //     res.statusCode = 404;
    //     res.write(JSON.stringify({message: 'User not found'}));
    // }
    // res.end();
}

// Not found Hanlder

const notFoundHandler = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 404;
    res.write(JSON.stringify({message: 'Route not found'}));
    res.end();
}

const server = createServer((req, res)=> {

    logger(req, res, ()=>{
        jsonMiddleware(req, res, ()=>{
            if(req.url === '/api/users' && req.method === 'GET'){
                getUsersHandler(req, res);
            }else if(req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET'){
                const id = req.url.split('/')[3];
                console.log(req.url)
                const user = users.find((user) => user.id === parseInt(id));
                if(user){
                    res.write(JSON.stringify(user));
                }
                else{
                    res.statusCode = 404;
                    res.write(JSON.stringify({message: 'User not found'}));
                }
                res.end();
            }
            else{
                notFoundHandler(req, res);
            }
        })
    })


})

server.listen(PORT, ()=>{
    console.log(`Server listening on ${PORT}`)
})