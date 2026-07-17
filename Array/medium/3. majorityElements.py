def bruteForce_approach(nums):
    n = len(nums)
    for i in range(n):
        count = 0
        for j in range(n):
            if nums[j] == nums[i]:
                count += 1

        if count > n//2:
            return nums[i]
    return -1


# print(bruteForce_approach([7, 0, 0, 1, 7, 7, 2, 7, 7]))

def better_approach(nums):
    n = len(nums)
    hash_map = {}

    for i in range(n):
        if nums[i] in hash_map:
            hash_map[nums[i]] += 1
        else:
            hash_map[nums[i]] = 1

    for num, count in hash_map.items():
        if count > n//2:
            return num

    return -1


# print(better_approach([7, 0, 0, 1, 7, 7, 2, 7, 7]))

def optimal_approach(nums):  # Moore's Voting algorithm
    ele = 0
    count = 0
    n = len(nums)

    for i in range(n):
        if count == 0:
            ele = nums[i]
            count += 1
        elif ele == nums[i]:
            count += 1
        else:
            count -= 1

    count_majority = 0
    for j in range(n):
        if ele == nums[j]:
            count_majority += 1

    if count_majority > n//2:
        return ele
    else:
        return -1


# print(optimal_approach([7, 0, 0, 1, 7, 7, 2, 7, 7]))
print(optimal_approach([7, 7, 5, 7, 5, 1, 5, 7, 5, 5, 7, 7, 5, 5, 5, 5]))
