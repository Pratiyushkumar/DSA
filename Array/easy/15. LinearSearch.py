def linear_search(nums, x):
    for i in range(0, len(nums)):
        if nums[i] == x:
            return i
    return -1


print(linear_search([1, 2, 3, 4, 5], 3))
print(linear_search([5, 4, 3, 2, 1], 5))
