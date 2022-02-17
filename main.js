// var number = prompt("Enter number: ", 50)

function fibonacci(number) {
    var a = 0;
    var b = 1;
    result = [];
    result.push(a, b);
    for (var i = 2; i <= number; i++) {
        var c = a + b;
        a = b;
        b = c;
        result.push(b);
    }
    return result;
}
