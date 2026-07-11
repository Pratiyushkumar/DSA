def bruteForce_approach(nums, target):
    n = len(nums)
    for i in range(n):
        for j in range(n):
            if i == j:
                continue

            if nums[i] + nums[j] == target:
                return [i, j]
    return -1


# print(bruteForce_approach([2, 7, 11, 15], 9))
# print(bruteForce_approach([3, 2, 4], 6))
# print(bruteForce_approach([3, 3], 6))


def better_approach(nums, target):
    n = len(nums)
    hash_map = {}

    for i in range(n):
        diff = target - nums[i]
        if diff in hash_map:
            return [i, hash_map[diff]]
        hash_map[nums[i]] = i

    return -1


# print(better_approach([2, 7, 11, 15], 9))
# print(better_approach([3, 2, 4], 6))
# print(better_approach([3, 3], 6))

def optimal_approach_v1(nums, target):
    n = len(nums)
    left = 0
    right = n-1

    nums.sort()

    while (left <= right):
        sum = nums[left] + nums[right]
        if sum == target:
            return "yes"
        elif sum > target:
            right -= 1
        elif sum < target:
            left += 1
    return "No"


# print(optimal_approach_v1([2, 7, 11, 15], 9))
# print(optimal_approach_v1([3, 2, 4], 6))
# print(optimal_approach_v1([3, 3], 6))
# print(optimal_approach_v1([1, 2, 3], 6))

def optimal_approach_v2(nums, target):
    nums_with_index = [(v, i) for i, v in enumerate(nums)]
    n = len(nums)
    nums_with_index.sort(key=lambda x: x[0])
    left = 0
    right = n-1

    while (left < right):
        current_sum = nums_with_index[left][0] + nums_with_index[right][0]

        if current_sum == target:
            return [nums_with_index[left][1], nums_with_index[right][1]]
        elif current_sum > target:
            right -= 1
        elif current_sum < target:
            left += 1

    return [-1, -1]


print(optimal_approach_v2([2, 7, 11, 15], 9))
print(optimal_approach_v2([3, 2, 4], 6))
print(optimal_approach_v2([3, 3], 6))
print(optimal_approach_v2([1, 2, 3], 6))
