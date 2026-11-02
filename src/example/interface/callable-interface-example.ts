interface MyCallableInterface {
  (): string;
}

const mci: MyCallableInterface = () => 'Hello';

console.log(mci());
