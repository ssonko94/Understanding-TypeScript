interface Named {
  readonly name?: string;
  //optional property
  outputName?: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  //optional property
  name?: string;
  age = 30;

  constructor(name?: string) {
    if (name) {
      this.name = name;
    }
  }

  greet(phrase: string): void {
    if (this.name) {
      console.log(phrase + " " + this.name);
    } else {
      console.log("Hi");
    }
  }
}

let user1 = new Person("Kanakulya");
let user2: Greetable;
user2 = {
  name: "Kamyuka",

  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  },
};
user1.greet("Goodmorning");
console.log(user1);

user2.greet("Hi there i am ");
console.log(user2);

interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (a: number, b: number) => {
  return a + b;
};

console.log(add(3, 5));

const user3 = new Person();
console.log(user3);
