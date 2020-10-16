/*
    Forma de Criar uma função reduzida
    O Objetivo é retornar os valores formatados
*/
var precos = ['10', '23', '19'];
/*
const precosEmReais = precos.map(function(preco){
    return 'R$'+ preco+',00';
});
console.log(precosEmReais);
*/
/*
const precosEmReais = precos.map(preco =>{
    return 'R$'+ preco+',00';
});
console.log(precosEmReais);
*/
/* Em casos de uma única linha de código*/
var precosEmReais = precos.map(function (preco) { return 'R$' + preco + ',00'; });
console.log(precosEmReais);
//Outros Exemplos
//O Erro que mostra no preco > 20 é apenas problema de IDE
/*
const acimaDeVinteReais = precos.filter(preco => preco > 20);
console.log(acimaDeVinteReais);
*/
//Continuar evoluindo
const acimaDeVinteReais = precos
                .filter(preco => preco >20)
                .map(preco => 'R$' + preco + ',00');
console.log(acimaDeVinteReais);
