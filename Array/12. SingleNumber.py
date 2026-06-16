def brute_force_approach(nums):
    n = len(nums)
    for i in range(n):
        temp = nums[i]
        count = 0
        for j in range(n):
            if nums[j] == temp:
                count += 1

        if count == 1:
            return temp
    return -1


# print(brute_force_approach([1, 1, 2, 3, 3, 4, 4]))
# print(brute_force_approach([4, 1, 2, 1, 2]))

def better_approach(nums):
    hashedArray = [0]*len(nums)
    for i in range(len(nums)):
        hashedArray[nums[i]] += 1

    for i in range(len(hashedArray)):
        if hashedArray[i] == 1:
            return i
    return -1


# print(better_approach([1, 1, 2, 3, 3, 4, 4]))
# print(better_approach([4, 1, 2, 1, 2]))

def better_approach_sec(nums):
    map = dict()
    for i in nums:
        map[i] = map.get(i, 0)+1

    for key, value in map.items():
        if value == 1:
            return key


# print(better_approach_sec([1, 1, 2, 3, 3, 4, 4]))


def optimal_approach(nums):
    result = 0
    for i in range(len(nums)):
        result ^= nums[i]
    return result


print(optimal_approach([1, 1, 2, 3, 3, 4, 4]))
print(optimal_approach([4, 1, 2, 1, 2]))
