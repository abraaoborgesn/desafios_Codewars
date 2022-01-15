function filter_list(list) {
    const number = []
    const notNumber = []

    list.forEach(value => {
        if (isNaN(value) || value < 0 || !Number.isInteger(value)) {
            notNumber.push(value)
        } else {
            number.push(value)
        }
    })
    console.log(number)
    // return number
}

filter_list([1, 2, 'a', 'b', 123, -7, 8.5, -98.6])

//  ======================== OUTRA SOLUÇÃO



function filter_list(l) {
    console.log(l.filter(value => typeof(value) === 'number'))
}


filter_list([1, 2, 'a', 'b', 123, -7, 8.5, -98.6])




