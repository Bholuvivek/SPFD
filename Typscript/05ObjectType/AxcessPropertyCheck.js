function createSquare(config) {
    return {
        color: config.color || "red",
        area: config.width ? config.width * config.width : 20
    };
}
var mySquare = createSquare({ color: "red", width: 100 });
console.log(createSquare(mySquare));
