import express from "express";

const app = express();

const frase = "Hola Mundo, ¿cómo están?";

app.get('/api/getFrase', (req, res) => {
    res.send(frase)
})

app.get('/api/getLetra/:num', (req, res) => {
    let num = parseInt(req.params.num)

    if(!isNaN(num)) {
        if(num >= 1 && num <= frase.length){
            res.send(frase[num-1]);
        } else {
            res.send({error : "El parametro esta fuera de rango"})
        }
    } else {
        res.send({error : "El parametro ingresado no es un numero"})
    }
})

app.get('/api/getPalabra/:num', (req, res) => {
    let num = parseInt(req.params.num)

    if(!isNaN(num)){
        let palabras = frase.split(' ')
        if(num >= 1 && num <= frase.length){
            res.send(palabras[num-1])
        } else {
            res.send({error : "El parametro esta fuera de rango"})
        }
    } else {
        res.send({error : "El parametro ingresado no es un numero"})
    }
})

const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en el servidor ${error}`))