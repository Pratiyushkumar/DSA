def insertionSort(nums):
    n = len(nums)
    for i in range(0, n):
        j = i
        while j > 0 and nums[j-1] > nums[j]:
            [nums[j], nums[j-1]] = [nums[j-1], nums[j]]
            j -= 1
    return nums


print(insertionSort([14, 9, 15, 12, 6, 8, 13]))
