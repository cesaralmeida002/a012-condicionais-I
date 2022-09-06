/*Crie um código que receba um **prompt** que diga: 
"Escreva aqui sua nacionalidade"e guarde o valor da resposta 
em uma const `nacionalidade`.*/


const nascionalidade = prompt("Qual sua nascionalidade?") 

/*Crie uma estrutura de `if/else if/else` que verifique se a nacionalidade
 guardada na const `nacionalidade` é igual a cada uma das nacionalidades
acima, e caso seja, imprima a nacionalidade no console. 
O último `else` deve imprimir "nacionalidade não encontrada" 
caso o valor de `nacionalidade` não corresponda a nenhum dos valores.*/

if(nascionalidade.toLocaleLowerCase() && "brasileiro(a)" || 
nascionalidade.toLocaleLowerCase() && "argentino(a)" ||
nascionalidade.toLocaleLowerCase() && "uruguaio(a)" ||
nascionalidade.toLocaleLowerCase() && "chileno(a)" ||
nascionalidade.toLocaleLowerCase() && "colombiano(a)"){
    console.log(`sua nascionalidade é: ${nascionalidade.toLocaleLowerCase()}`)
} else{
    console.log("NASCIONALIDADE NÃO ENCONTRADA")
}