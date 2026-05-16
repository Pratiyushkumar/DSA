def BubbleSort(nums):
    n = len(nums)
    for i in range(n-1, -1, -1):
        didSwap = 0
        for j in range(0, i):
            if nums[j] > nums[j+1]:
                [nums[j], nums[j+1]] = [nums[j+1], nums[j]]
                didSwap = 1

        if didSwap == 0:
            break
    return nums


# print(BubbleSort([13, 46, 24, 52, 20, 9, 10]))
print(BubbleSort([2, 5, 10, 15, 20]))
