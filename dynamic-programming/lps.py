# Calculates and returns the longest palindromic subsequence in s (defined below)

def getValue(row, col):
    return matrix[row][col]

def setValue(row, col, value):
    matrix[row][col] = value
    return value

def palindrome_length(s, l, r):
    if r - l == 1:
        row, col = l, r

        if s[l] == s[r]:
            setValue(row, col, 2)
        else:
            setValue(row, col, 1)
        return getValue(row, col)

    elif r == l:
        row, col = l, r
        return setValue(row, col, 1)

    elif s[l] == s[r]:
        if getValue(l + 1, r - 1) > 0:
            return setValue(l, r, 2 + getValue(l + 1, r - 1))
        return setValue(l, r, 2 + palindrome_length(s, l + 1, r - 1))

    else:
        right_value = getValue(l + 1, r)
        left_value = getValue(l, r - 1)

        if 0 < right_value <= left_value:
            return setValue(l, r, max(left_value, right_value))
        
        return setValue(l, r, max(palindrome_length(s, l + 1, r), palindrome_length(s, l, r - 1)))


s = "baxnana"  # Max Length: 5
n = len(s)
matrix =  [[0]*n for i in range(n)]
for i in range(n):
    		matrix[i][i] = 1

count = palindrome_length(s, 0, n - 1)
print ("Length:", count)
