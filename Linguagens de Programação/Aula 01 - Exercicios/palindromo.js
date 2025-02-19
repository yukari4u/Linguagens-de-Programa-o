function palindromo(texto) {
    let invertido = texto.split("").reverse().join("")
    
    if (texto == invertido) {
        console.log("A palavra é um palíndromo!")
    } else {
        console.log("A palavra não é um palíndromo!")
    }
}

palindromo("arara")
palindromo("facens")