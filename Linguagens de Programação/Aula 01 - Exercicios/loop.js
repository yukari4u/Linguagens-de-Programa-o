let loop = ""

for (let i = 1; i <= 10; i++) {
    loop += i
    if (i < 10) {
        loop += " - "
    }
}

console.log(loop)
