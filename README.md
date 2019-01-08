# Abstract Classes + Decorators Bug

## Reproduction

After cloning and installing dependencies with `yarn`, run:

```bash
yarn build
node dist/index.js
```

And you should get an error like

```
console.log(person.greet());
                   ^
TypeError: person.greet is not a function
```

## What's happening?

When an `abstract` method is present on a class, something in the decorators plugin is transforming the method into a property initializer to `void 0`. This clobbers the parent class's implementation of the abstract method.
