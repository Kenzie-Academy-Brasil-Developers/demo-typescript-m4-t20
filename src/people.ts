interface IPet {
   id: number;
   name: string;
   species: string;
}

interface IPerson {
   id: number;
   name: string;
   age: number;
   pet?: IPet;
}

interface IProgrammer extends IPerson {
   stack: string[];
}

const programmer: IProgrammer = {
   id: 1,
   name: "Alex",
   age: 33,
   stack: ["React", "Next", "Node", "Express", "Nest"],
   pet: {
      id: 1,
      name: "Luz",
      species: "Cachorro",
   },
};

type TPerson = {
   id: number;
   name: string;
   age: number;
};

type TProgrammer = IPerson & {
   stack: string[];
};

// Primitivos, Interface, Union - SÃO TOPOS TIPOS
