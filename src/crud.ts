/* interface - tipo que existe para descrever especificamente objetos */

interface ITodo{
    id: number;
    title: string;
    content: string;
}

// string[], number[], boolean[]

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

// as vezes será nulo, as vezes será o objeto de usuário

interface IUser{
    id: number;
    name: string;
    email: string;
}

