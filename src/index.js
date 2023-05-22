import axios from 'axios';
import express, { request, response } from 'express';
const express = require('express')
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());



let usuarios = []

app.post("/criar", (request, response)=>{
 
    let usuario = request.body

    let validaUser = usuarios.find(user => user.email === usuario.email)
    
    if(validaUser){
      return response.status(400).json("Usuario já existe")
    }else{
      usuarios.push({
        id: Math.floor(Math.random()*67676),
        email: usuario.email,
        senha: usuario.senha  
      })
      return response.status(201).json("Usuario criado com sucesso.");
    }
})

app.post("/login", (request, response)=>{
    let login = request.body

    let entrarEmail = usuarios.some(user => user.email === login.email)

    if(entrarEmail){
        let index = usuarios.findIndex(user => user.email === login.email)
        let entrar = login.senha === usuarios[index].senha
        if(entrar){
            return response.status(202).json("Logado com sucesso.") 
        }else{
            return response.status(404).json("Email ou senha não existe.")
        }
           
    }


})


app.get("/usuarios", (request, response)=>{

  return response.status(200).json(usuarios)
  
})



app.listen(3333, () => console.log("Servidor iniciado"));