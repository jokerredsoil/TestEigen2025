matrix = [
    [1, 2, 0],
    [4, 5, 6],
    [7, 8, 9]
]

n = len(matrix)
diagonal_1 = sum(matrix[i][i] for i in range(n))
diagonal_2 = sum(matrix[i][n - 1 - i] for i in range(n))

hasil = abs(diagonal_1 - diagonal_2)
print(hasil) 
