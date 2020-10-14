let notaDosAlunos:number[] = [10,8,8.5,7];

//índices a palavra reservada in mostra o índice
//0,1,2,3
for (let i in notaDosAlunos){
    console.log(i);
}


//valores a palavra reservada of mostra os valores
//10,8,8.5,7
for (let notaAluno of notaDosAlunos){
    console.log(notaAluno);
}
