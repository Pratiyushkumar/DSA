def isArraySorted(arr):
    for i in range(len(arr)-1):
        if arr[i] > arr[i+1]:
            return False
    return True


print(isArraySorted([1, 2, 3, 4, 5]))
print(isArraySorted([1, 2, 1, 3, 5, 4]))
