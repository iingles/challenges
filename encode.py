import string

def toBinary(character):
    binary = []

    for c in range(len(character)):
        binary.append( bin( ord( character[c] ) )[2:] )

    return binary

def encodeMap(binary):

    encoded = []

    for byte in range(len(binary)):
        for bit in binary[byte][bit]:
            encoded[byte][bit] = 1
    
    return encoded

print( encodeMap(toBinary('FRED')))