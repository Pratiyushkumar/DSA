def brute_force_approach(num1, num2):
    s = set()
    union = []
    for i in range(0, len(num1)):
        s.add(num1[i])

    for i in range(0, len(num2)):
        s.add(num2[i])

    for i in s:
        union.append(i)

    return union


# print(brute_force_approach(
#     [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [2, 3, 4, 4, 5, 11, 12]))

def better_approach(nums1, nums2):
    s = set()
    s.update(nums1)
    s.update(nums2)
    return [*s]


# print(better_approach(
#     [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [2, 3, 4, 4, 5, 11, 12]))


def optimal_approach(nums1, nums2):
    n = len(nums1)
    m = len(nums2)
    union_arr = []
    i = 0
    j = 0

    while i < n and j < m:
        if nums1[i] <= nums2[j]:
            if len(union_arr) == 0 or union_arr[-1] != nums1[i]:
                union_arr.append(nums1[i])
            i += 1
        else:
            if len(union_arr) == 0 or union_arr[-1] != nums2[j]:
                union_arr.append(nums2[j])
            j += 1

    while i < n:
        if len(union_arr) == 0 or union_arr[-1] != nums1[i]:
            union_arr.append(nums1[i])
        i += 1

    while j < m:
        if len(union_arr) == 0 or union_arr[-1] != nums2[j]:
            union_arr.append(nums2[j])
        j += 1

    return union_arr


print(optimal_approach(
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [2, 3, 4, 4, 5, 11, 12]))
