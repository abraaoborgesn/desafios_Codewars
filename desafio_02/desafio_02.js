function narcissistic(value) {
    const valueString = value.toString()
    // console.log(typeof(valueString))

    const valueSplitted = valueString.split('')
    // console.log(valueSplitted)

    const size = valueString.length
    // console.log(count)

    let calculated = []

    valueSplitted.forEach((element) => {
        calculated.push(Math.pow(element, size))
    })
    // console.log(calculated)

    var soma = calculated.reduce((a, b) => a + b, 0)
    // console.log(soma)

    if (value === soma) {
        return true
        // console.log('True. Este número é narcisista!')
    } else {
        return false
        // console.log('False. Este número não é narcisista!')
    }
}


narcissistic(153)
