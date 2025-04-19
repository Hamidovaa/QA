

function fib(n) {
    let a = 0;
    let b = 1;

    for (let i = 2; i <= n; i++) {
        let neW= a + b;
        a = b;
        b = neW;
    }

    return b;
}
console.log(fib(3)); 