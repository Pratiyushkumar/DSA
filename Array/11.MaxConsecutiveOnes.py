def optimal_approach(nums):
    count = 0
    max_ones = 0
    for i in range(0, len(nums)):
        if nums[i] == 1:
            count += 1
            if count > max_ones:
                max_ones += 1
        else:
            count = 0
    return max_ones

# TC - O(n)
# SC - O(1)

print(optimal_approach([1, 1, 0, 1, 1, 1, 0, 1, 1]))
print(optimal_approach([1, 1, 0, 1, 1, 1]))
print(optimal_approach([1, 0, 1, 1, 0, 1]))
print(optimal_approach([1]))
