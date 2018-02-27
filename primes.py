# Rohit Falor
# primes.py
# Tests various methods of printing all primes from 1 to n inclusive
# Last modified: 12/22/17

import math
import timeit

# Brute force method - checks if # is divisible by all numbers below it
def brute_force(n):
    for num in range(2, n + 1):
        is_div = False
        for divisor in range(2, num):
            if num%divisor == 0:
                is_div = True
                break

        if not is_div:
            file.write(str(num) + ' ')
    file.write("\n")

def optimize_sqrt(n):
    for num in range(2, n + 1):
        is_div = False
        for divisor in range(2, math.floor(math.sqrt(num))):
            if num%divisor == 0:
                is_div = True
                break

        if not is_div:
            file.write(str(num) + ', ')
    print()

print("Enter an upper bound:", end=' ')
n = int(input())

def (n):
    for num in range(2, n + 1):
        is_div = False
        for divisor in range(2, math.floor(math.sqrt(num))):
            if num%divisor == 0:
                is_div = True
                break

        if not is_div:
            file.write(str(num) + ', ')
    print()

print("Enter an upper bound:", end=' ')
n = int(input())

if __name__ == "__main__":
    setup = '''from __main__ import n, brute_force, optimize_sqrt '''
    file = open("primes.txt","a")

    print ("Brute force method:", end=" ")
    time_taken = timeit.timeit("brute_force(n)",setup=setup, number=3)
    ms = math.ceil(time_taken * 1000)
    print (ms, "ms")

