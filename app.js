const express = require('express')

const PORT = parseInt(process.argv[2]) || 8080;

const app = express()
app.use(express.static('public'))

const server = app.listen(PORT, () => console.log("Server up"))

app.get('/info', (req, res) => {
    console.log(`Worker ${process.pid} has received your request ${PORT}/`)
    res.send({worker_pid: process.pid, port: PORT})
    console.log(`Worker ${process.pid} has finished ${PORT}/`)
})

app.get('/calculo', (req, res) => {
    console.log(`Worker ${process.pid} has received your request ${PORT}/calculo`)
    let result = 0;
    for (let i = 0; i < 5e9; i++) {
        result += i;
    }
    res.send({result, worker_pid: process.pid, port: PORT})
    console.log(`Worker ${process.pid} has finished ${PORT}/calculo`)
})