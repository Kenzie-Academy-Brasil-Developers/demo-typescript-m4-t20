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
   // O privado ele registringe na instância e também restringe na herança
   private id: number = 1;
   private todoList: ITodo[];

   constructor(todoList: ITodo[] = []) {
    this.todoList = todoList;
   }

   getTodoList(){
      return this.todoList;
   }

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
console.table(todoServices.getTodoList());

const secondTodoServices = new TodoServices();
secondTodoServices.addTodo("Pensei que era programação.", "Mas é engenharia cívil.");
console.table(secondTodoServices.getTodoList());