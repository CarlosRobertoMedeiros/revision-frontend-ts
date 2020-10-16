var precos = ['10', '23', '19'];
/* Sem Template String*/
/*
const acimaDeVinteReais = precos
                .filter(preco => preco >20)
                .map(preco => 'R$' + preco + ',00');

console.log(acimaDeVinteReais);
*/
/* Com Template String */
var acimaDeVinteReais = precos
    .filter(function (preco) { return preco > 20; })
    .map(function (preco) { return " R$ " + preco + ",00"; });
console.log(acimaDeVinteReais);
