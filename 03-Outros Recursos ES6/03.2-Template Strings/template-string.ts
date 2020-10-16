const precos = ['10','23','19'];

/* Sem Template String*/
/*
const acimaDeVinteReais = precos
                .filter(preco => preco >20)
                .map(preco => 'R$' + preco + ',00');

console.log(acimaDeVinteReais);
*/


/* Com Template String */
const acimaDeVinteReais = precos
                .filter(preco => preco >20)
                .map(preco => ` R$ ${preco},00`);

console.log(acimaDeVinteReais);
