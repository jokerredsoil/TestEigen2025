s = "NEGIE1"
letters = list(filter(str.isalpha, s))[::-1]
print(''.join(letters) + s[-1])