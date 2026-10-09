interface MyInterface {
  s: string;
}

interface MyNewableInteface {
  new (s: string): MyInterface;
}

class MyClass implements MyInterface {
  s: string;

  constructor(s: string) {
    this.s = s;
    console.log(s);
  }
}

const mni: MyNewableInteface = MyClass;

console.log(mni.name);
