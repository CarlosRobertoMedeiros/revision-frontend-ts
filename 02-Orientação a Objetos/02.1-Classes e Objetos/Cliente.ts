class Cliente {
    
    nome:string;
    idade:number;

    constructor (nome:string, idade:number){
        this.nome = nome;
        this.idade = idade;
    }

    apresentar(){
        return `Olá, eu sou ${this.nome} e tenho ${this.idade} anos`;
    }

}

//Testando a Classe

let valor:number=29.90;

let joao:Cliente = new Cliente('João', 38);
let apresentacao = joao.apresentar();
console.log(apresentacao);

let maria:Cliente = new Cliente('Maria', 22);
apresentacao = maria.apresentar();
console.log(apresentacao);




