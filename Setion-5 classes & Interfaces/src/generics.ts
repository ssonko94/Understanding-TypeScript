// // const names: Array<string> = [];
// // const names: Array<string | number> = [];

// const names: string[] = [];

// const promise = new Promise<string>((resolve, reject) => {
//   setTimeout(() => {
//     resolve("This is a promise...");
//   }, 2000);

//   setTimeout(() => {
//     reject("Error while loading ...");
//   }, 3000);
// });

// promise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

//Defining A Generic function
//Working with constraints in generic functions i.e precisly setting the type of parameters in object arguments
function merge<T extends object, U extends object>(obj1: T, obj2: U) {
  return Object.assign(obj1, obj2);
}

const jay = merge<{ name: string }, { age: number }>(
  { name: "Jimmy" },
  { age: 27 }
);

console.log(jay.name);

const hanny = merge({ animal: "rodent" }, { family: "gnawing mammals" });
console.log(hanny);
interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value.";
  if (element.length === 1) {
    descriptionText = "Got 1 element.";
  } else if (element.length > 0) {
    descriptionText = "Got " + element.length + " elements.";
  }

  return [element, descriptionText];
}

console.log(countAndDescribe("Hi there"));

//The Keyof constraint
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "value: " + obj[key];
}

console.log(extractAndConvert({ name: "Ziyechi" }, "name"));

//Generic classes

//Generic are combined with constraints to describe how classes arrays objects and functions operate which type of data to recieve where the generics give you the flexibility to use any type and constraints limit you to the specific and precise data types
class Store<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStore = new Store<string>();
textStore.addItem("Jean");
textStore.addItem("Daniel");
textStore.addItem("Britta");
textStore.removeItem("Jean");
console.log(textStore.getItems());

// const objStore = new Store<object>();

//GENERIC UTILITY TYPES

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

//partial Utility Types
function craeteCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};

  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

//Readonly Utility Types
const names: Readonly<string[]> = ['Jimmy', 'Jonnes', 'John', 'Daniel'];
