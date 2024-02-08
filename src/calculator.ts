type TOperation = "sum" | "sub" | "mult" | "divi";

interface IOperatorConfig {
   operation: TOperation;
   number: number;
}

let total = 0;

enum Operations{
    SUM = "sum",
    SUB = "sub",
    MULT = "mult",
    DIVI = "divi"
}

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