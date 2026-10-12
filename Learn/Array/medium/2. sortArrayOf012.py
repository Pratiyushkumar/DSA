def bruteForce_approach(nums):
    nums.sort()

    return nums


# print(bruteForce_approach([0, 1, 2, 0, 1, 2, 1, 2, 0, 0, 0, 1]))

def better_approach(nums):
    c0 = 0
    c1 = 0
    c2 = 0
    n = len(nums)

    for i in range(n):
        if nums[i] == 0:
            c0 += 1
        elif nums[i] == 1:
            c1 += 1
        else:
            c2 += 1
    print(f"c0 - {c0}, c1 - {c1}, c2 - {c2}")
    for j in range(0, c0):
        nums[j] = 0

    for k in range(c0, c0+c1):
        nums[k] = 1

    for m in range(c0+c1, n):
        nums[m] = 2

    return nums


# print(better_approach([0, 1, 2, 0, 1, 2, 1, 2, 0, 0, 0, 1]))


def optimal_approach(nums):
    n = len(nums)
    low = 0
    high = n-1
    mid = 0

    while mid <= high:
        if nums[mid] == 0:
            [nums[low], nums[mid]] = [nums[mid], nums[low]]
            low += 1
            mid += 1
        elif nums[mid] == 1:
            mid += 1
        elif nums[mid] == 2:
            [nums[high], nums[mid]] = [nums[mid], nums[high]]
            high -= 1

    return nums


print(optimal_approach([0, 1, 2, 0, 1, 2, 1, 2, 0, 0, 0, 1]))
