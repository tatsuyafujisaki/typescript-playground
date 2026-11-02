function printJsonRootType(json: string) {
  const parsed = JSON.parse(json);
  console.log(
    parsed === null ? 'null' : Array.isArray(parsed) ? 'array' : typeof parsed,
  );
}

printJsonRootType('{ "name": "Jane", "age": 18 }'); // object

printJsonRootType('["a", "b"]'); // array

printJsonRootType('-1'); // number
printJsonRootType('3.14'); // number

printJsonRootType('"abc"'); // string

printJsonRootType('true'); // true
printJsonRootType('false'); // false

printJsonRootType('null'); // null
