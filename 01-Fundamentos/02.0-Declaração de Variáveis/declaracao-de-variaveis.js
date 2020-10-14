//var, let e const
//var
function iniciarTime(iniciaJogo) {
    var nome = 'Messi e Amigos';
    if (iniciaJogo) {
        var cidade = 'Brasília'; //Aqui o Hoisting vai acontecer, colocando a declaração da var no início
    }
    console.log(nome + " v\u00E3o jogar em " + cidade);
}
iniciarTime(true);
//let Funciona como uma variável local, funciona apenas no escopo
function iniciarTime2(iniciaJogoEmBrasilia) {
    var nome = 'Messi e Amigos';
    var cidade = 'São Paulo';
    if (iniciaJogoEmBrasilia) {
        cidade = 'Brasília'; //Aqui o Hoisting vai acontecer, colocando a declaração da var no início
    }
    console.log(nome + " v\u00E3o jogar em " + cidade);
}
iniciarTime2(true);
iniciarTime2(false);
//const constante não troca o valor de uma variável é um let que não troca de nome
function iniciarTime3(iniciaJogoEmBrasilia) {
    var nome = 'Messi e Amigos';
    var cidade = 'São Paulo';
    if (iniciaJogoEmBrasilia) {
        cidade = 'Brasília'; //Aqui o Hoisting vai acontecer, colocando a declaração da var no início
    }
    console.log(nome + " v\u00E3o jogar em " + cidade);
}
iniciarTime3(true);
iniciarTime3(false);
