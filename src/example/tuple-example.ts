function doSomething(triple: [boolean, number, string]) {
  const [x, y, z] = triple;
  console.log(typeof x);
  console.log(typeof y);
  console.log(typeof z);
  console.log(typeof triple[0]);
  console.log(typeof triple[1]);
  console.log(typeof triple[2]);
}

doSomething([true, 42, 'a']);
