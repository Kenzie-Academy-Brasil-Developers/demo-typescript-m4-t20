/* O Typescript ele não afeta a funcionalidade da aplicação */
// Sintaxe descritiva: fluxo de dados na aplicação

console.log("Olá mundo");

// Dependências de produção - pacotes essenciais para rodar o projeto no ar
// Dependências de desenvolvimento - pacotes para auxiliar no desenvolvimento

let firstName = "Alex";
let age = 33;
let isATeacher = true;

/* tipos primitivos */

/* function sayMyName(name: string){
    console.log(name);   
}*/

const sayMyName = (name: string) => {
    console.log(name);
}

/*
function sum(a: number, b: number): number{
    return a + b;
}
*/

const sum = (a: number, b: number): number => {
    return a + b;
}

sayMyName(firstName);

/*
Podemos apontar tipos em qualquer circustância, 
mas NÃO PRECISAMOS apontar tipos em qualquer circustância
*/

//Inferência - tenta deduzir o que você está pensando

//QUANDO EU PRECISO APONTAR TIPAGEM? Quando a inferência falha

// A inferência não vai conseguir deduzir tipos de listas que iniciam vazias
/* Observar exemplo do CRUD */

// A inferência não vai conseguir deduzir tipos de parâmetro de função
/* Observar exemplo do CRUD */

// A inferência não vai conseguir deduzir tipos que variam

//Union type
let user: IUser | null = null;