import { onRequest } from 'firebase-functions/v2/https'
import express from 'express'
import cors from 'cors'
import { addCoffee, getAllCoffees } from './src/coffees.js'

const app = express()

app.use(cors())
app.use(express.json())

app.get("/test", (req, res) => res.send("It is working!"))

app.post("/", addCoffee)
app.get("/", getAllCoffees)

export const api = onRequest(app) 
/* ^ must be what is put in the function key in the firebase.json file. 
Used in place of app.listen. 
Sends any request to the api.*/