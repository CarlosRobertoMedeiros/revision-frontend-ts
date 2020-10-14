//boolean
var estaPago = true;
//number
var idade = 20;
var valor = 29.98;
//string
var empresa = 'Tivit';
//Template Strings
var nome = 'João';
console.log("Ol\u00E1 meu nome \u00E9 " + nome + " e tenho " + idade + " anos.");
//Arrays
var notas = [8, 6, 7, 9];
//Tuplas tuple 
var alunos = ['João', 10, 'Matemática'];
console.log(alunos[0]); //João
console.log(alunos[1]); //10
console.log(alunos[2]); //Matemática
console.log(alunos); //[ 'João', 10, 'Matemática' ]
//Enum é uma maneira de dar um nome mais legível para uma constante
//É um novo tipo de Dados
var Cor;
(function (Cor) {
    Cor[Cor["Verde"] = 0] = "Verde";
    Cor[Cor["Amarelo"] = 1] = "Amarelo";
    Cor[Cor["Azul"] = 2] = "Azul";
    Cor[Cor["Branco"] = 3] = "Branco";
})(Cor || (Cor = {}));
var corFundoBandeira = Cor.Verde;
console.log(corFundoBandeira.valueOf());
//Any (Aceita qualquer Valor), ou Seja na prática não utilizar tipagem estática
var algumValor = 4;
algumValor = 'Agora é uma string';
algumValor = true;
