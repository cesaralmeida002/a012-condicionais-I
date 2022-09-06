/*Crie um código que receba uma const numérica qualquer. 
Crie um `if` para verificar se o número guardado na const é **par**. 
Caso seja, imprima no console a mensagem: "o número é par".
*/

const num = prompt("Digite seu número")

if((num%2) === 0){
    console.log("seu número e PAR")
} else{
    console.log("Seu número é IMPAR")
}
