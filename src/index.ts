abstract class Greetable {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  abstract greet(): string;
}

class Person extends Greetable {
  greet() {
    return `Hello ${this.name}`;
  }
}

const person = new Person("Emily");
console.log(person.greet());
