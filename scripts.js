// ver qual estava com margem de verificado
let pratoVerificado = 0;
let bebidaVerificado = 0;
let docesVerificado = 0;

// ver qual ja foi selecionado
let pratoSelecionado = 0;
let bebidaSelecionado = 0;
let doceSelecionado = 0;

//pegar preços para retornar mensagem
let precoPrato =0;
let precoBebida =0; 
let precoDoce =0;

//pegar nomes para retornar mensagem
let nomePrato = 0;
let nomeBebida = 0;
let nomeDoce = 0;

function select(selecionado){

    pratoVerificado = document.querySelector(".pratos").querySelector(".borda");

// remover do prato selecionado anteriormente

    if (pratoVerificado){
    pratoVerificado.classList.remove("borda");
    pratoVerificado.querySelector(".verificado").classList.add("some");

}

// adicionar no selecionado
selecionado.classList.add("borda");
selecionado.querySelector(".verificado").classList.remove("some");
pratoSelecionado = 1;

// Pegando valores para retornar
nomePrato = selecionado.querySelector("h1").innerHTML;
precoPrato = Number(selecionado.querySelector("span").innerHTML.replace(/,/g,"."));


// verificação se todos estão selecionados
if (pratoSelecionado == 1 && bebidaSelecionado == 1 && doceSelecionado === 1){
    let botao2 = document.querySelector(".finalizar").querySelector(".fechar-pedido");
    let botao1 = document.querySelector(".finalizar").querySelector(".botao-bloqueado")
    botao2.classList.remove("some");
    botao1.classList.add("some");
} 

}

function select2(selecionado){

bebidaVerificado = document.querySelector(".bebidas").querySelector(".borda");

// remover da bebida selecionada

if (bebidaVerificado){
    bebidaVerificado.classList.remove("borda");
    bebidaVerificado.querySelector(".verificado").classList.add("some");
} 

// adicionar no selecionado
selecionado.classList.add("borda");
selecionado.querySelector(".verificado").classList.remove("some");
bebidaSelecionado = 1;

// Pegando valores para retornar

nomeBebida = selecionado.querySelector("h1").innerHTML;
precoBebida = Number(selecionado.querySelector("span").innerHTML.replace(/,/g,"."));

// verificação se todos estão selecionados
if (pratoSelecionado == 1 && bebidaSelecionado == 1 && doceSelecionado === 1){
    let botao2 = document.querySelector(".finalizar").querySelector(".fechar-pedido");
    let botao1 = document.querySelector(".finalizar").querySelector(".botao-bloqueado")
    botao2.classList.remove("some");
    botao1.classList.add("some");
} 

}

function select3(selecionado){
doceVerificado = document.querySelector(".doces").querySelector(".borda");


// remover do doce selecionado

if (doceVerificado){
    doceVerificado.classList.remove("borda");
    doceVerificado.querySelector(".verificado").classList.add("some");
} 

// adicionar no selecionado
selecionado.classList.add("borda");
selecionado.querySelector(".verificado").classList.remove("some");
doceSelecionado = 1;

//Pegando valores para retornar
nomeDoce = selecionado.querySelector("h1").innerHTML;
precoDoce = Number(selecionado.querySelector("span").innerHTML.replace(/,/g,"."));

// verificação se todos estão selecionados
if (pratoSelecionado == 1 && bebidaSelecionado == 1 && doceSelecionado === 1){
    let botao2 = document.querySelector(".finalizar").querySelector(".fechar-pedido");
    let botao1 = document.querySelector(".finalizar").querySelector(".botao-bloqueado")
    botao2.classList.remove("some");
    botao1.classList.add("some");
} 


}
function finalizarPedido(){
let precoFinal = (precoPrato + precoBebida + precoDoce).toFixed(2);
let mensagem = `Olá, gostaria de fazer o pedido: \n
- Prato: ${nomePrato} \n
- Bebida: ${nomeBebida} \n
- Sobremesa: ${nomeDoce} \n
Total: R$ ${precoFinal}
`;
let mensagemFormatada = encodeURIComponent(mensagem);



 window.open("https://wa.me/5535997038698?text=" + mensagemFormatada);
}
