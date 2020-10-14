
//Exemplo de Interfaces
interface Animal{
    sexo:'male' | 'female';
    hungry:boolean
}

interface Mamifero extends Animal{
    desmamado:boolean;
}

//Associando a Interface
const animal:Mamifero={
    hungry:false,
    desmamado:true,
    sexo:'male'
}

//Exemplo de Types
//Type não extend
type Person = Mamifero & {
    nome:string
}

const animal2: Person ={
    hungry:false,
    desmamado:true,
    sexo:'male',
    nome:'Thiago'
}

//A grande diferença está no momento da digitação
//Com type eu posso criar um tipo Como Exemplo
type Sex = 'male' | 'female';

type Animal2 = {
    sex:Sex;
    hungry:boolean,
    age:number
}

//Como declarar funções utilizando interfaces
interface Greet{
    (name:string):string
}
const greet:Greet = name => 'Hello, ' +name;

//Como declarar funções utilizando type
type GreetMethod = (name:string) => string

const greeting = (name:string) => 'Hello, '+name;




