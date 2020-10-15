interface Pessoa{
    nome:string;
    idade:number;
    sexo?:string; //? Indica que o dado não é obrigatório
}

function imprimirIdade(pessoa: {idade:number}){
    console.log(pessoa.idade);

}

let joaoMarcos = {nome:'João', idade:22};
imprimirIdade(joaoMarcos);