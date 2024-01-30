const obj = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"

}
for (const key in obj) {
     //console.log(key);
}

for (const key in obj) {
 console.log(`${key} is Extnsion ${obj[key]}`);   
}

