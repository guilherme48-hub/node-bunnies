const express = require('express') //importa

const app = express()

// get => envia informaçoes  do back-end para o front-end
// post => recebe informaçoes do front-end no back-end

app.get('/',(requisicao,resposta)=>{
    resposta.send("este é o meu back-end")

})

app.listen(3000,()=>{
    console.log("servidor rodando na porta 3000")
})