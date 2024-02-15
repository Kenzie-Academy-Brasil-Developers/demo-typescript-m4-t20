interface IPost{
    id: number;
    title: string;
    content: string;
    category: string;
    authorId: number;
}

/*
interface IPostCreateFormData{
    title: string;
    content: string;
    category: string;
}
*/

// Omit, Pick e Partial - Tipos derivados
// Excluindo, não exibindo
type TPostCreateFormData = Omit<IPost, "id" | "authorId">;

// Pick
// Pegando chaves e trazendo para um novo tipo
type TPostParams = Pick<IPost, "authorId">; 

//Partial 
// Transforma todos os valores de um tipo ou interface em opcionais
type TPostUpdateData = Partial<TPostCreateFormData>;
