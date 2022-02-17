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

function maxValue(maxNumber) {  // вывод последовательности до максимального указанного значения
    var a = 0;
    var b = 1;
    result = [];
    result.push(a, b);
    while (b < maxNumber) {
        var c = a + b;
        a = b;
        b = c;
        if (b <= maxNumber) {
            result.push(b);
        }
    }
    return result;
}

function maxValue2(maxNumber) {  // второй способ решения
    var a = 0;
    var b = 1;
    result = [a, b];
    c = a + b;
    while (c <= maxNumber) {
        a = b;
        b = c;
        result.push(c);
        c = a + b;
    }
    return result;
}

console.log(fibonacci(24));
console.log(maxValue(8));
console.log(maxValue2(34));