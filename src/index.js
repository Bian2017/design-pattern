class Person {
  constructor(name) {
    this.name = name;
  }

  get() {
    return this.name;
  }
}

let p = new Person('LiLei');

console.log(p.name);
