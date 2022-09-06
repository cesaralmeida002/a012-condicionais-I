/*Escreva um código que receba três valores. Uma idade, 
um booleano que responda se a pessoa terminou ou não o ensino médio, 
e um booleano que responda se a pessoa está cursando alguma faculdade.*/

let idade = number prompt("Qual sua idade?")
let terminouEnsinoMedio = confirm("Você terminou o ensino médio?")
let estaCursandoFaculdade = confirm("Está cursando alguma faculdade?")

/*Crie um `if` para cada variável, checando as seguintes afirmacões:
- Se a pessoa tem 18 anos ou mais;
- Se a pessoa terminou o ensino médio;
- Se a pessoa NÃO está cursando alguma faculdade;
*/
if(idade >= 18){
    console.log("Você é maior de idade")
}else{
	console.log("Você ainda é menor de idade")
}

if(terminouEnsinoMedio && true){
    console.log("Ensino Médio conclupido, PARABÉNS")
}else{
    console.log("Continue estudando, logo você concluirá")
}

if(estaCursandoFaculdade && true){
    console.log("Que legal, logo estará formado!!")
}else{
    console.log("Escolha um curso que gosta e manda ver...")
}