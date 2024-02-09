// Programação a Orientada a Objetos
// Trabalhar com classes:
// Agrupamento de variáveis e métodos (funções)
// Organizando o seu código

import { ITodo } from "./crud";

/*
let id = 1;

const todoList: ITodo[] = [];

function addTodo(title: string, content: string){
    const newTodo = { id, title, content };
    todoList.push(newTodo);
    id++;
}

function removeTodo(removingId: number){
    const index = todoList.findIndex((todo) => todo.id === removingId);
    todoList.splice(index, 1);
}
*/

// Diretamente no corpo da classe não temos LET E CONST

// Planta arquitetonica
class TodoServices {
   // Podemos mas não precisamos
   id: number = 1;
   todoList: ITodo[];

   constructor(todoList: ITodo[] = []) {
    this.todoList = todoList;
   }

   /* 
    Sempre que estou utilizando uma variável ou 
    método declarado no interior uma classe
    eu precisaria prefixar com o "this.""
    */

   addTodo(title: string, content: string): ITodo {
      const newTodo = { id: this.id, title, content };
      this.todoList.push(newTodo);
      this.id++;

      return newTodo;
   }

   removeTodo(removingId: number): void {
      const index = this.todoList.findIndex((todo) => todo.id === removingId);
      this.todoList.splice(index, 1);
   }
}

//Instância - Prédio
const todoServices = new TodoServices();
console.log(todoServices.addTodo("Estou aprendendo sobre POO", "Tá sendo muito maneiro."));
console.log(todoServices.addTodo(
   "Tá sendo super legal!",
   "Sabe que esse negócio de classe nem é tão díficil!"
));
console.log(todoServices.todoList);

const secondTodoServices = new TodoServices();
secondTodoServices.addTodo("Pensei que era programação.", "Mas é engenharia cívil.");
console.log(secondTodoServices.todoList);
