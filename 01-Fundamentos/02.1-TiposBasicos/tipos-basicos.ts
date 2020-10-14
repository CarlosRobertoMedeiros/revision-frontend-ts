//boolean
let estaPago:boolean = true;

//number
let idade: number = 20;
let valor: number = 29.98;

//string
let empresa:string='Tivit';

//Template Strings
let nome:string = 'João';
console.log(`Olá meu nome é ${nome} e tenho ${idade} anos.`);

//Arrays
let notas: number[]=[8,6,7,9];

//Tuplas tuple 
let alunos: [string,number,string] = ['João',10,'Matemática'];
console.log(alunos[0]);//João
console.log(alunos[1]);//10
console.log(alunos[2]);//Matemática
console.log(alunos);//[ 'João', 10, 'Matemática' ]

//Enum é uma maneira de dar um nome mais legível para uma constante
//É um novo tipo de Dados
enum Cor{Verde, Amarelo, Azul, Branco}
let corFundoBandeira:Cor = Cor.Verde;

//Any (Aceita qualquer Valor), ou Seja na prática não utilizar tipagem estática
//Onde seria interessante usar
// Quando estou com Bibliotecas de Terceiros ...
// Em Migrações de JavaScript para TypeScript
// Utilizando Arrays com vários tipos de dados
let algumValor:any=4;
algumValor ='Agora é uma string';
algumValor = true;

//void 
//Normalmente usado em retorno de método
function alerta(): void{
    //....alert('Operação Não Permitida !')
}

//null e undefined -> Não faz muito sentido
let u:undefined = undefined;
let n:null = null;
//null e undefined são subtipos dos outros tipos







