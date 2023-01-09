//-----------------PRIMEIRA PARTE-----------------------------------

/*let quantidadeSubtotal = document.getElementById("quantidade-subtotal");
let valorSubtotal = document.getElementById("valor-subtotal");

let subtotalInfo = {
  quantidade: 1,
  valor: 11.66,
};

quantidadeSubtotal.innerText = subtotalInfo.quantidade + " itens";
valorSubtotal.innerText = subtotalInfo.valor;*/

/* Primeiro nos perguntamos QUEM ,QUE ,QUANDO?
Capturar Elementos do DOM.
1 .
capturamos e salvamos o elemento que
 queremos que ative o evento*/

/*let btnAdicionarProduto01 = document.getElementById("btn-adicionar-produto-01")*/

/*Capturando o outro elemento do do DOM.
Agora o elemento que será manipulado ou afetado*/

/*let quantidadeProduto01 = document.getElementById("quantidade-produto-01");*/

/*com um console.log(),verificamos no dev tools se deu certo;

console.log(btnAdicionarProduto01 ,quantidadeProduto01);*/



/* 2 . Declaramos um a funcao que deverá aumentar em 1 ao
valor do input. ,definindo nas chaves
a nossa lógica de programaçao.Ressaltando que
como o input nao tem tag de fechamento,nao poderiamos 
usar o innerText.
entao  como precisamos aumentar  em 1,
podemos ultilizar a propiedade equivalente ao 
innerText:
o  value*/
/*function adcionarUm(){

  quantidadeProduto01.value =  Number(quantidadeProduto01.value) + 1
}*/



/*Notamosna pagina que o resultado deu 11 .Porque o 1 aqui é uma string,
confirmamos isso ao usar a funcao nativa typeof(linha 54). E na linha 43
encapsulamos a propiedade quantidadeProduto.value(colocando dentro de parentese) e
adicionamos a ela  uma segunda funcao nativa: Number.Que converterá essa string em
um numero, possibilitando podermos  aplicar uma soma a ele 

console.log(typeof quantidadeProduto01.value);*/


/*testamos nossa funçao manualmente chamado a (linha 59);

adcionarUm();*/


/* 3 . Sabemos que nossa funcão(linha 41) está funcionado.Contudo,
não queremos  que ela seja executada, chamada ou aconteça manualmente.
Precisamos que ela seja executada quando apertarmos(evento)
o botao(que no HTML se encontra assim:
<button id="btn-adicionar-produto-01">+</button>).
Então precisamos desencadear o evento usando o elemento salvo anteriormente
(linha 18): btnAdicionarProduto01. Assim associamos a ele
o metodo(função): addEventListerner (linha 77)para acessa lo
usamos Dot notation. A seguir passamos os dois parâmetros que 
desencadearão o evento.
Definindo o evento:como primero parametro usaremos  o click,
e como segundo argumento ou parametro só precisamas chamar a funcão(linha 41).
DETALHE IMPORTANTE: NÂO É PARA EXECUTAR A FUNÇÃO(usar parentese).SOMENTE 
DEVEMOS CHAMAR OU SEJA SEM OS PRENTESES*/



/*btnAdicionarProduto01.addEventListener("click", adcionarUm )*/


//----------------------SEGUNDA PARTE-----------------------------
/*1. Adicionar 1  à propriedade quantidade do objeto subtotalInfo
2. Adicionar o novo valor no DOM usando o innerText
3. Refatorar o código definindo a função atualizarSubtotal


/*Agora vamos trabalhar nosso código para poder tornar possivel sincronizar
o botão(elemento gatilho),para que ao atualizar a quantidade(linhas 41 a 44): 
function adcionarUm(){

  quantidadeProduto01.value =  Number(quantidadeProduto01.value) + 1
}, os ,ítens tambem sejam
atualizados,no caso não precisaremos capturar e salvar os itens
pois isso já foi  feito inicialmente(linhas 1 e 2).
Vamos precisar ultilizar a funçao e as Dot notation que nesse caso naõ se encontram no DOM,
mas no arquivo JavaScript:
let subtotalInfo = {
  quantidade: 1,
  valor: 11.66,(linhas 4 a 6)
};

quantidadeSubtotal.innerText = subtotalInfo.quantidade + " itens";
valorSubtotal.innerText = subtotalInfo.valor;(linhas 9 e 10)

O fato de estarem no arquivo JS faciltará nosso trabalhamo pois não precisaremos
trasformar ou converter srting em Number.

A seguir copiamos o codigo   colamos abaixo (comentamos o codigo acima).
Então seguiremos agora com as alterações abaixo:
Chamaremos ou acessaremos a parte que preciaremos 
manipular da funcao subtotalIfo.quantidade (agora linhas 113):
subtotalInfo.quantidade = subtotalIfo.quatidade + 1 ou  subtotalInfo.quantidade += 1
dentro da funcao adicionarUm(agora linhas 128 a 132).Então para funcionar
precisamos enviar para o DOM  coforme ja fizemos na linha (121),assim
colamos: quantidadeSubtotal.innerText = subtotalInfo.quantidade + " itens";
na funçao. E a pagina ta finalmrnte sincronizada! 




let quantidadeSubtotal = document.getElementById("quantidade-subtotal");
let valorSubtotal = document.getElementById("valor-subtotal");

let subtotalInfo = {
  quantidade: 1,
  valor: 11.66,
};

quantidadeSubtotal.innerText = subtotalInfo.quantidade + " itens";
valorSubtotal.innerText = subtotalInfo.valor;



let btnAdicionarProduto01 = document.getElementById("btn-adicionar-produto-01")


let quantidadeProduto01 = document.getElementById("quantidade-produto-01");


function adcionarUm(){

  quantidadeProduto01.value =  Number(quantidadeProduto01.value) + 1;

  subtotalInfo.quantidade += 1;

  quantidadeSubtotal.innerText = subtotalInfo.quantidade + " itens";
  
}

console.log(typeof quantidadeProduto01.value);


btnAdicionarProduto01.addEventListener("click", adcionarUm );*/



//-------------------PARTE 3--REFATORANDO O CÓDIGO------------------------------


/* Afim de tornar o codigo mais agil e enxuto,bem como evitando
ter que copiar e colar muitas vezes vamos encapsular numa funçao.
So que observamos que qdo atualizamos a pagina  avriavel ta vindo 
do jeito que tava  do HTML,porque a função nao foi chamada nenhumA vez.
Então chamamos a funcao   atualizarSubtotal();(linha 181)

 Adicionar 1  à propriedade quantidade do objeto subtotalInfo
2. Adicionar o novo valor no DOM usando o innerText
3. Refatorar o código definindo a função atualizarSubtotal





//Capturar elementos do DOM

let quantidadeSubtotal = document.getElementById("quantidade-subtotal");
let valorSubtotal = document.getElementById("valor-subtotal");

//Objeto

let subtotalInfo = {
  quantidade: 1,
  valor: 11.66,
};




//Funções

function atualizarSubtotal(){

  quantidadeSubtotal.innerText = subtotalInfo.quantidade + " itens";

  valorSubtotal.innerText = subtotalInfo.valor;
};


atualizarSubtotal();

function subtrairUm(){
  //Manipulando o input produto
  quantidadeProduto01.value = Number(quantidadeProduto01.value) - 1;
  //Manipulando a quantidade subtotal
  subtotalInfo.quantidade -= 1
  //Atualizando subtotal
  atualizarSubtotal();
}


function adcionarUm(){
   //Manipulando o input produto
  quantidadeProduto01.value =  Number(quantidadeProduto01.value) + 1;
   // //Manipulando a quantidade subtotal
  subtotalInfo.quantidade += 1;

   //Atualizando subtotal
  atualizarSubtotal();
  
}




let btnAdicionarProduto01 = document.getElementById("btn-adicionar-produto-01")

let btnsubtrairProduto01  = document.getElementById("btn-subtrair-produto-01")

let quantidadeProduto01 = document.getElementById("quantidade-produto-01");



btnAdicionarProduto01.addEventListener("click", adcionarUm)
btnsubtrairProduto01.addEventListener("click", subtrairUm)*/




//---------------------PARTE QUATRO--------------------------------


/* 1. Criar variável que guarda o valor de produto01
2. Adicionar o valor no subtotal quando clicamos no botão
3. Usar a função nativa toFixed()para arredondar o valor exibido ,Que coverte numero pra string no DOM */




//Capturar elementos do DOM

let quantidadeSubtotal = document.getElementById("quantidade-subtotal");
let valorSubtotal = document.getElementById("valor-subtotal");
//Criar variavel valor
let valorProduto01 = 11.66;




//Objeto

let subtotalInfo = {
  quantidade: 1,
  valor: 11.66,
};



//Funções

function atualizarSubtotal(){

  quantidadeSubtotal.innerText = subtotalInfo.quantidade + " itens";
  //Usamos a fucao nativa toFixed(),usalmente se usa como parametros 2 casas decimais.
  valorSubtotal.innerText = subtotalInfo.valor.toFixed(2);

  
};


atualizarSubtotal();

function subtrairUm(){
  //Manipulando o input produto
  quantidadeProduto01.value = Number(quantidadeProduto01.value) - 1;
  //Manipulando a quantidade subtotal
  subtotalInfo.quantidade -= 1;
  //Manipular o valor do subtotal
  subtotalInfo.valor = subtotalInfo.valor - valorProduto01

  //Atualizando subtotal
  atualizarSubtotal();
}


function adcionarUm(){
   //Manipulando o input produto
  quantidadeProduto01.value =  Number(quantidadeProduto01.value) + 1;
   // //Manipulando a quantidade subtotal
  subtotalInfo.quantidade += 1;
  //Manipular o valor do subtotal
  subtotalInfo.valor = subtotalInfo.valor + valorProduto01
   
   //Atualizando subtotal
  atualizarSubtotal();
  
}




let btnAdicionarProduto01 = document.getElementById("btn-adicionar-produto-01")

let btnsubtrairProduto01  = document.getElementById("btn-subtrair-produto-01")

let quantidadeProduto01 = document.getElementById("quantidade-produto-01");



btnAdicionarProduto01.addEventListener("click", adcionarUm)
btnsubtrairProduto01.addEventListener("click", subtrairUm)















