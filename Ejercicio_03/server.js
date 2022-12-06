import express from 'express'

const app = express()

app.use(express.json())

let frase = 'Frase inicial'

app.get('/api/leer/:pos', (req,res) => {
    let { pos } = req.params
    res.send(frase.split(' ')[parseInt(pos)-1])
})

app.get('/api/leer', (req,res) => {
    res.send(frase)
})

app.post('/api/guardar', (req,res) => {
    let { palabra } = req.body
    frase +=  (' ' + palabra)
    res.send(`palabra ${palabra} agregada`)
})

app.put('/api/actualizar/:pos', (req,res) => {
    let { palabra } = req.body
    let { pos } = req.params
    let palabras = frase.split(' ')
    let palabraAnt = palabras[parseInt(pos)-1]
    palabras[parseInt(pos)-1] = palabra
    frase = palabras.join(' ') 
    res.send(`palabra ${palabraAnt} actualizada por ${palabra}`)
})

app.delete('/api/borrar/:pos', (req,res) => {
    let { pos } = req.params
    let palabras = frase.split(' ')
    let palabra = palabras.splice(parseInt(pos)-1,1)
    frase = palabras.join(' ') 
    res.send(`palabra ${palabra} borrada`)
})

const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))