type TOperation = "sum" | "sub" | "mult" | "divi";

interface IOperatorConfig {
   operation: TOperation;
   number: number;
}

// let total = 0;

enum Operations{
    SUM = "sum",
    SUB = "sub",
    MULT = "mult",
    DIVI = "divi"
}

/*

function operator({ number, operation }: IOperatorConfig) {
   switch (operation) {
      case Operations.SUM:
         total = total + number;
         break;
      case Operations.SUB:
         total = total - number;
         break;
      case Operations.MULT:
         total = total * number;
         break;
      case Operations.DIVI:
         total = total / number;
         break;
   }

   return total;
}

function reset() {
   total = 0;
}

console.log(operator({ operation: "sum", number: 10}));
console.log(operator({ operation: "divi", number: 2}));
console.log(operator({ operation: "mult", number: 3}));

*/

// POO - Calculadora

// Projeto arquitonico da calculadora
class CalculatorService{
   total: number;

   //Construtor - recebe parâmetros e realiza comportamentos iniciais - 
   //no momento que a gente instância a classe, o método construtor é disparado
   constructor(number = 0){
      console.log("Cheguei people!");
      this.total = number;
   }

   doOperation({ number, operation }: IOperatorConfig){
      switch (operation) {
         case Operations.SUM:
            this.total += number;
            break;
         case Operations.SUB:
            this.total -= number;
            break;
         case Operations.MULT:
            this.total *= number;
            break;
         case Operations.DIVI:
            this.total /= number;
            break;
      }
   
      return this.total;
   }

   reset(){
      this.total = 0;
   }
}

// Construindo o prédio
const calc1 = new CalculatorService();
calc1.doOperation({ number: 20, operation: "sum"});
calc1.doOperation({ number: 5, operation: "sub"});
console.log(calc1.total);

const calc2 = new CalculatorService(10);
calc2.doOperation({ number: 10, operation: "mult"});
console.log(calc2.total);