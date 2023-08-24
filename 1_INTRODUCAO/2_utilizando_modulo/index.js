const fs = require ('fs')

fs.readFile('arquivo.txt', 'utf-8', (erro,dados) => {
if(erro) {
    console.log(erro)
}
console.log(dados)
})