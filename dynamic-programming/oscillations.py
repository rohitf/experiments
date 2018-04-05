arr = []

def even_odd(n):
    return "even" if n%2 == 0 else "odd"

def longestOscillation(nums):
    for i, num in enumerate(nums):
        if i == 0:
            arr.append(0)
        if even_odd(num) == "even" and nums[i] > nums[i-1]: 
            arr.append(1 + arr[-1])
        if even_odd(num) == "odd" and nums[i] < nums[i-1]: 
            arr.append(1 + arr[-1])
        else:
            arr.append(arr[-1])

    return arr[-1]

nums = [1,4,3,2,7,9,3]
print(longestOscillation(nums))
print(arr)