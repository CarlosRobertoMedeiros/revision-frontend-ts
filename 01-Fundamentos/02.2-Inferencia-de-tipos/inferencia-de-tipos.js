/*
    Deixar o TypeScript determinar qual o tipo da Variável
*/
var quantidade = 20;
// quantidade ='Olá'; -> O TS Inferiu que quantidade é number não compila !
var x = [1, 2, null];
//x[0] = true; -> O TS Inferiu que os valores do array são do tipo number não compila !
//Contextual Typing
//Ao clicar no Mouse associar ao evento do Mouse
//Sem informar ele infere 
window.onmousedown = function (evento) {
    console.log(evento.button);
};
