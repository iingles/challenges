const toBinary = function (inString) {

    let binary = ''

    for (let i = 0; i < inString.length; i++) {
        let num = inString.charCodeAt(i).toString(2)

        if (num.length < 8) {
            let pad = 8 - num.length

            for (let j = 0; j < pad.length; pad++) {
                num = 0 + bit
            }
            
        }

        binary = num + binary
    }

    return binary
}

const encode = function (binary) {
    let bitString = binary.toString(...binary)

    return bitString
}