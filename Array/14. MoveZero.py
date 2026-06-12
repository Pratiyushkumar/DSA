def brute_force_approach(nums):
    temp = []
    for i in range(0, len(nums)):
        if nums[i] != 0:
            temp.append(nums[i])

    x = len(temp)

    for i in range(0, x):
        nums[i] = temp[i]

    for i in range(x, len(nums)):
        nums[i] = 0

    return nums


# print(brute_force_approach([1, 0, 2, 3, 0, 4, 0, 1]))
# print(brute_force_approach([1, 2, 0, 1, 0, 4, 0]))
# print(brute_force_approach([0]))

def optimal_approach(nums):
    i = 0
    j = 0
    while (i < len(nums)):
        if nums[i] != 0:
            if nums[j] == 0:
                [nums[i], nums[j]] = [nums[j], nums[i]]
            i += 1
            j += 1
        else:
            i += 1
    return nums


print(optimal_approach([1, 0, 2, 3, 0, 4, 0, 1]))
print(optimal_approach([1, 2, 0, 1, 0, 4, 0]))
print(optimal_approach([0]))
