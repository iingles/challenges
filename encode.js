const toBinary = function (inString) {

    let binary = ''

    for (let i = 0; i < inString.length; i++) {
        let num = inString.charCodeAt(i).toString(2)

        if (num.length < 8) {
            for (let j = 0; j < (8 - num.length); j++) {
                num = '0' + num
            }
        }

        binary = num + binary
    }

    return binary
}

const encode = function (binary) {
    let [x, w, v, u, t, s, r, q, p, n, m, l, k, j, h, g, f, e, d, c, b, a, a9, a8, a7, a6, a5, a4, a3, a2, a1, a0] = binary

    return [x, p, f, a7, w, n, e, a6, v, m, d, a5, u, l, c, a4, t, k, b, a3, s, j, a, a2, r, h, a9, a1, q, g, a8, a0]
}

const decode = function (inString) {
    let [x, p, f, a7, w, n, e, a6, v, m, d, a5, u, l, c, a4, t, k, b, a3, s, j, a, a2, r, h, a9, a1, q, g, a8, a0] = inString

    return [x, w, v, u, t, s, r, q, p, n, m, l, k, j, h, g, f, e, d, c, b, a, a9, a8, a7, a6, a5, a4, a3, a2, a1, a0]
}

const toString = function (inBinary) {
    let bytes = []


    parseInt(inBinary, 2).toString(10)
}

let email = encode(toBinary('isaa'))

const toBytes = function (inArray) {


    return bytes
}