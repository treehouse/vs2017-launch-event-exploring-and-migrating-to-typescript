function sum() {
    var values = [];
    if (arguments.length === 2 && Array.isArray(arguments[1])) {
        values = values.concat(arguments[1]);
    }
    else {
        var argumentsArray = Array.prototype.slice.call(arguments);
        values = values.concat(argumentsArray.slice(1));
    }
    var result = values.reduce(function (acc, val) {
        return acc + val;
    }, 0);
    arguments[0](result);
}
sum(function (x) { return console.log(x); });
sum(function (x) { return console.log(x); }, 1, 2, 3, 4);
sum(function (x) { return console.log(x); }, [1, 2, 3, 4]);
