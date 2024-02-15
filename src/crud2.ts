interface ITech {
   id: number;
   name: string;
   level: "Básico" | "Intermediário" | "Avançado";
   createdAt: Date;
   updatedAt?: Date;
}

type TTechCreateData = Pick<ITech, "name" | "level">;

type TTechUpdateData = Pick<ITech, "level">;

class TechServices {
   private id = 1;
   private techList: ITech[] = [];

   getTechs() {
      return this.techList;
   }

   createTech(data: TTechCreateData) {
      const date = new Date(); // Vai ser o horário e data do servidor (no caso back-end)
      const newTech = { ...data, id: this.id, createdAt: date };

      this.techList.push(newTech);
      this.id++;

      return newTech; //Se eu quero utilizar este valor após a execução do método
   }

   updateTech(id: number, data: TTechUpdateData) {
      const date = new Date();
      const index = this.techList.findIndex((tech) => tech.id === id);
      const currentTech = this.techList.find((tech) => tech.id === id);

      if (currentTech) {
         // O que está na direita vai sempre substituir o que está na esquerda
         const updateTech = { ...currentTech, ...data, updatedAt: date };

         this.techList.splice(index, 1, updateTech);

         return updateTech;
      } else {
         console.error("A tecnologia não existe.");
      }
   }

   deleteTech(id: number) {
      const index = this.techList.findIndex((tech) => tech.id === id);

      if (index >= 0) {
         this.techList.splice(index, 1);
      } else {
         console.error("A tecnologia não existe.");
      }
   }
}

const techList = new TechServices();
techList.createTech({ name: "React", level: "Avançado"});
techList.createTech({ name: "NextJS", level: "Avançado"});
techList.createTech({ name: "Node", level: "Avançado"});
console.log(techList.getTechs());
techList.updateTech(2, { level: "Intermediário"});
techList.updateTech(4, { level: "Intermediário"});
console.log(techList.getTechs());
techList.deleteTech(2);
console.log(techList.getTechs());
