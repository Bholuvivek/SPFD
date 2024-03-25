function doSomething(obj) {
    // We can read from 'obj.prop'.
    console.log("prop has the value '" + obj.prop + "'.");
    // But we can't re-assign it.
    obj.prop = "hello";
}
var myobj = { prop: 'ps' };
doSomething(myobj);
