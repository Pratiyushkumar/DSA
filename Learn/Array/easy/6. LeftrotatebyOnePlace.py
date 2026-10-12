def rotatebyOne(nums):
    array_length = len(nums)
    temp = nums[0]
    for i in range(1, array_length):
        nums[i-1] = nums[i]
    nums[array_length - 1] = temp
    return nums


nums = [1, 2, 3, 4, 5]
print(rotatebyOne(nums))
