def bruteforce_approach(nums, d):
    n = len(nums)
    d = d % n
    temp = []
    for i in range(0, d):
        temp.append(nums[i])

    for i in range(d, n):
        nums[i-d] = nums[i]

    # j = 0
    # for i in range(n-d, n):
    #     nums[i] = temp[j]
    #     j += 1

    for i in range(n-d, n):
        nums[i] = temp[d-(n-i)]

    return nums

# print(bruteforce_approach([1, 2, 3, 4, 5, 6, 7], 4))


def optimal_approach(nums, d):
    n = len(nums)
    d = d % n
    reverse(nums, 0, d-1)
    reverse(nums, d, n-1)
    reverse(nums, 0, n-1)
    return nums


def reverse(nums, start, end):
    while start <= end:
        [nums[start], nums[end]] = [nums[end], nums[start]]
        start += 1
        end -= 1
    return nums


arr = [1, 2, 3, 4, 5, 6, 7]
print(optimal_approach(arr, 4))
