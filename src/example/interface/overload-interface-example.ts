interface MyOverloadInterface {
  (input: number): string;
  (input: string): string;
}

const moi: MyOverloadInterface = input =>
  typeof input === 'string' ? input : input.toString();

console.log(moi('Hello'));
console.log(moi(42));
