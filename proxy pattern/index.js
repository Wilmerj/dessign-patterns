import { isValidEmail, isAllLetters } from "./validator.js";

const user = {
  firstName: "Javier",
  lastName: "Garzon",
  username: "wilmerj",
  age: 26,
  email: "wilmerj1996@gmail.com",
};

const userProxy = new Proxy(user, {
  get: (obj, prop) => {
    return `${new Date()} | The value of ${prop} is ${Reflect.get(obj, prop)}`;
  },
  set: (obj, prop, value) => {
    if (prop === "email") {
      if (!isValidEmail(value)) {
        console.log("Please provide a valid email.");
        return false;
      }
    }

    if (prop === "username") {
      if (value.length < 3) {
        throw new Error("Please use a longer username.");
      } else if (!isAllLetters(value)) {
        throw new Error("You can only use letters");
      }
    }

    if (prop === "age") {
      if (typeof value !== "number") {
        throw new Error("Please provide a valid age.");
      }

      if (value < 18) {
        throw "User cannot be younger than 18.";
      }
    }

    return Reflect.set(obj, prop, value);
  },
});

// userProxy.email = 'wilmer';
// console.log(userProxy.username)

console.log(userProxy.age)
userProxy.age = 27;
console.log(userProxy.age)