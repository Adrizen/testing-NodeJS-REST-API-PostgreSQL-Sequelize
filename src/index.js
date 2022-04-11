//import app from './app'
const app = require('./app')
const PORT = 3000;

async function main(){
    await app.listen(PORT);
    console.log(`Server on port ${PORT}`)
}

main();