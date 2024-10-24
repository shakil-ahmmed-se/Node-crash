// import fs from 'fs';
import { read } from 'fs';
import fs from 'fs/promises'

// readfile - callback
// fs.readFile('./text.txt', 'utf8', (err, data) => {
//     if(err) throw err;
//     console.log(data)
// })

// readfileSync() -Synchronous version
// const data = fs.readFileSync('./text.txt', 'utf8');
// console.log(data)

// readfile - promise .then()

// fs.readFile('./text.txt', 'utf8')
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

// readfile - async / await 

const readFile = async() => {
    try {
        const data = await fs.readFile('./text.txt', 'utf8')
        console.log(data);  
    } catch (error) {
        console.log(error)
    }
}


// writefile
const writeFile = async () => {
    try {
        await fs.writeFile('./text.txt', 'Hello I am wrtting to this file')
        console.log('file wrting to...')
    } catch (error) {
        console.log(error)
    }
}
// appendFile()
const appendFile = async() => {
    try {
        await fs.appendFile('./text.txt', '\nThis is the appended text');
        console.log('Text appended..')
    } catch (error) {
        console.log(error)
    }
}


writeFile();
appendFile();
readFile();