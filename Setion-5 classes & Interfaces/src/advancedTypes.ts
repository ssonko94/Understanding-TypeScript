type Admin = {
  name: string;
  privilages: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

//Intersection Types
type ElevatedEmployee = Admin & Employee;

const el: ElevatedEmployee = {
  name: "Zziwa",
  privilages: ["server-side rendering"],
  startDate: new Date(),
};
console.log(el);

type Combinable = string | number;
type Numerric = number | boolean;

type Universal = Combinable & Numerric;

//-------------------------------------------------------------
function addElemnts(a: Combinable, b: Combinable) {
  //Type Guards are check statements to ensure the type of a union parameter at runtime
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }

  return a + b;
}

type UnkwonEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnkwonEmployee) {
  console.log("Name:" + emp.name);
  //Type Guards to check the presence of a property on an object that your not sure it exists
  if ("privilages" in emp) {
    console.log("Privilages:" + emp.privilages);
  }
  if ("startDate" in emp) {
    console.log("StartDate:" + emp.startDate);
  }
}

printEmployeeInformation(el);

class Car {
  drive() {
    console.log("driving .....");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck ....");
  }

  loadCargo(amount: number) {
    console.log("loading cargo:" + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  //   if ("loadCargo" in vehicle) {
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}
useVehicle(v1);
useVehicle(v2);

//Discriminated Types
interface Bird {
  //Discriminated union
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  //Discriminated union

  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  switch (animal.type) {
    case "bird":
      console.log(
        "Flying at a speed of " + animal.flyingSpeed + " milesperhour"
      );
      break;
    case "horse":
      console.log(
        "Running at a speed of " + animal.runningSpeed + " milesperhour"
      );
      break;
    default:
      break;
  }
}

moveAnimal({ type: "bird", flyingSpeed: 235 });
moveAnimal({ type: "horse", runningSpeed: 685 });

//TypeCasting(this is telling Type script the type of an element it probably can't guess)
//you can do this by putting an empty tag infrot of the element
// const userInputElement = <HTMLInputElement>document.getElementById("userInput")!;

//the otherway you can do this  is by putting an as keyword after the of the element then declaring its type
const userInputElement = document.getElementById(
  "userInput"
)! as HTMLInputElement;

userInputElement.value = "dammn";

//Or if you are not sure if an element exists then u can simply use an if check statement
const button = document.getElementById("button");
if (button) {
  (button as HTMLButtonElement).value = "click Me";
}

interface ErrorContainer {
  //Index property which are used wen we dont know which property we are going to use and how many properties we have
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: "Not a valid email address",
  userName: "Must start with a capital character",
};

////////////////////////////////
//Function OverLoad
function addThings(a: string, b: string): string;
function addThings(a: number, b: number): number;
function addThings(a: Combinable, b: Combinable) {
  //Type Guards are check statements to ensure the type of a union parameter at runtime
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + " " + b.toString();
  }

  return a + b;
}

const result = addThings("jamila", "kyla");

console.log(result.split(" ").join("-"));

const fetchedData = {
  id: "ui",
  name: "jimmy",
  job: {
    title: "CEO",
    description: "My own company ",
  },
};

//Optional Chaining
console.log(fetchedData?.job?.title);

//Nullish Coalescing operator
//makes a check icluding nullish or falsy values and undefined returning true  which saves the short circuiting behavior of the || operator
const userId = undefined;
const storedData = userId ?? "Default";
console.log(storedData);
