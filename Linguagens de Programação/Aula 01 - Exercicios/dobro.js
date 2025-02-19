function dobro(num) {
    if (num > 0) {
        return `O dobro de ${num} é ${num * 2}`
    } else {
        return "Só é aceito números positivos maiores que zero"
    }
}

console.log(dobro(10))
console.log(dobro(-8))