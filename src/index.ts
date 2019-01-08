function decorator() {}

abstract class Greeter {
  abstract greet(): string;

  @decorator
  method() {
    return "something";
  }
}

class Person extends Greeter {
  greet() {
    return "Hello world";
  }
}

const person = new Person();
console.log(person.greet());
