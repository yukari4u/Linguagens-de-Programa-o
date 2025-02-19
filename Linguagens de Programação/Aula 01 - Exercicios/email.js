function validarEmail(email) {
    let arroba = email.indexOf("@")
    let ponto = email.lastIndexOf(".")

    if (arroba > 0 && ponto > arroba + 1) {
        return true
    }
    return false
}

console.log(validarEmail("mkato4@gmail.com"))
console.log(validarEmail("abc@gmail"))
