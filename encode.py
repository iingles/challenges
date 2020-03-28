import string

def toBinary(character):
    binary = []

    for c in range(len(character)):
        binary.append( bin( ord( character[c] ) )[2:] )

    return binary 

print( toBinary('FRED') )