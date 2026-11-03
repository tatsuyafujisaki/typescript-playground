interface MyInterface {
  s: string;
}

type MyNewable = new (s: string) => MyInterface;

class MyClass implements MyInterface {
  s: string;

  constructor(s: string) {
    this.s = s;
    console.log(s);
  }
}

const mn: MyNewable = MyClass;

console.log(mn.name);
