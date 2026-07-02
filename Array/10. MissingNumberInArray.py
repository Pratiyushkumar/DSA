def brute_force_approach(nums):
    n = len(nums)+1
    for i in range(1, n+1):
        flag = 0
        for j in range(0, n-1):
            if nums[j] == i:
                flag = 1
                break

        if flag == 0:
            return i

    return -1


# print(brute_force_approach([1, 2, 4, 5, 6]))
# print(brute_force_approach([3, 0, 1]))
# print(brute_force_approach([0, 1]))
# print(brute_force_approach([9, 6, 4, 2, 3, 5, 7, 0, 1]))

def better_approach(nums):
    n = len(nums)
    hashed_array = [0]*(n+1)
    for i in range(0, n):
        hashed_array[nums[i]] += 1

    for j in range(1, len(hashed_array)):
        if hashed_array[j] == 0:
            return j

    return -1


# print(better_approach([9, 6, 4, 2, 3, 5, 7, 0, 1]))
# print(better_approach([3, 0, 1]))

def optimized_approach(nums):
    lo, hi = min(nums), max(nums)

    s1 = (lo + hi) * (hi - lo + 1) // 2 
    s2 =  sum(nums)
    
    return s1 - s2

print(optimized_approach([8,2,4,5,3,7,1]))
print(optimized_approach([1, 2, 3, 5]))
print(optimized_approach([9, 6, 4, 2, 3, 5, 7, 0, 1]))
print(optimized_approach([3, 0, 1]))