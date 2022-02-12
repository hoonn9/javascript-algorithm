function addUpTo(n) {
    let total = 0;
    for (let i = 0; i < n; i++) {
        total += i;
    }
    return total;
}

const result = addUpTo(6);
console.log(result);
