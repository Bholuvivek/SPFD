// @errors: 2540
interface SomeType {
   prop: string;
}

function doSomething(obj: SomeType) {
  // We can read from 'obj.prop'.
  console.log(`prop has the value '${obj.prop}'.`);

  // But we can't re-assign it.
  obj.prop = "hello";
}
let myobj:SomeType =
 {prop:'ps'}
doSomething(myobj)