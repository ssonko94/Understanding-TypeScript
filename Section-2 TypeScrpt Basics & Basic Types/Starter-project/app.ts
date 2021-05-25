// function add(n1: number, n2: number) {
//   return n1 + n2;
// }

// const number1 = 5;
// const number2 = 2.5;

// const result = add(number1, number2);

// console.log(result);

//Enum
enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "Zziwa",
  age: 36,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

if (person.role === 0) {
  console.log("he is admin");
}

let favouriteActivities: string[] = [];

favouriteActivities.push("hey");

//Union types
// function combine(input1: number | string, input2: number | string) {
//   let result;
//   if (typeof input1 === "number" && typeof input2 === "number") {
//     result = input1 + input2;
//   } else {
//     result = input1.toString() + input2.toString();
//   }
//   return result;
// }

// const combinedAges = combine(30, 26);
// console.log(combinedAges);

// const combinedNames = combine("Jacob", " Zouma");
// console.log(combinedNames);

//Type Aliases / Custom-Types
type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-text";

//Literal types
function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);

const combinedNames = combine("Jacob", " Zouma", "as-text");
console.log(combinedNames);

const combinedliterals = combine("20", "12", "as-number");
console.log(combinedliterals);

function add(n1: number, n2: number) {
  return n1 + n2;
}

//Function return types & void

// function printResult(num: number): void {
//   console.log("Result: " + num);
// }

function printResult(num: number): undefined {
  console.log("Result: " + num);
  return;
}

printResult(add(5, 12));

//Function Types
// let combineValues: Function;
let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = printResult;

console.log(combineValues(6, 4));


//Return type never

function generateError(message: string, code: number): never {
  throw {message: message, errorCode: code};
}

generateError('An error occured', 500);