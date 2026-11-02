interface MyInterface {
  s: string;
}

interface MyNewableInterface {
  new (s: string): MyInterface;
}

class MyClass implements MyInterface {
  s: string;

  constructor(s: string) {
    this.s = s;
    console.log(s);
  }
}

const mni: MyNewableInterface = MyClass;

console.log(mni.name);
