def bruteForce_approach(nums, k):
    n = len(nums)
    max_len = 0
    for i in range(0, n):
        for j in range(i, n):
            sum = 0
            for idx in range(i, j + 1):
                sum += nums[idx]
            if sum == k:
                max_len = max(j - i + 1, max_len)
    return max_len


# print(bruteForce_approach([10, 5, 2, 7, 1, 9], 15))
# print(bruteForce_approach([1, 2, 3, 1, 1, 1, 1, 4, 2, 3], 3))
# print(bruteForce_approach([-3, 2, 1], 6))


def bruteForce_approach_2(nums, k):
    n = len(nums)
    maxLen = 0
    for i in range(0, n):
        sum = 0
        for j in range(i, n):
            sum += nums[j]
            if sum == k:
                maxLen = max(maxLen, j - i + 1)
    return maxLen


# print(bruteForce_approach_2([10, 5, 2, 7, 1, 9], 15))
# print(bruteForce_approach_2([1, 2, 3, 1, 1, 1, 1, 4, 2, 3], 3))
# print(bruteForce_approach_2([-3, 2, 1], 6))


def better_approach(nums, k):
    prefixSum = 0
    hashMap = {}
    maxLen = 0

    for i in range(0, len(nums)):
        prefixSum += nums[i]

        if prefixSum == k:
            maxLen = i + 1
        elif (prefixSum - k) in hashMap:
            maxLen = max(maxLen, (i - hashMap[prefixSum - k]))

        if prefixSum not in hashMap:
            hashMap[prefixSum] = i

    return maxLen


# print(better_approach([10, 5, 2, 7, 1, 9], 15))
# print(better_approach([1, 2, 3, 1, 1, 1, 1, 4, 2, 3], 3))
# print(better_approach([-3, 2, 1], 6))


def optimalSolution(nums, k):
    i = 0
    j = 0
    maxLen = 0
    sum = 0
    n = len(nums)

    while i < n:
        sum += nums[i]
        while sum > k and j <= i:
            sum -= nums[j]
            j += 1

        if sum == k:
            maxLen = max(maxLen, i - j + 1)

        i += 1

    return maxLen


print(optimalSolution([10, 5, 2, 7, 1, 9], 15))
print(optimalSolution([1, 2, 3, 1, 1, 1, 1, 4, 2, 3], 3))
print(optimalSolution([-3, 2, 1], 6))
