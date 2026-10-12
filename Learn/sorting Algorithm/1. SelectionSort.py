def selectionSort(arr):
    n = len(arr)
    for i in range(0, n-1):
        min = i
        for j in range(i+1, n):
            if (arr[min] > arr[j]):
                min = j
        [arr[i], arr[min]] = [arr[min], arr[i]]
    return arr


print(selectionSort([13, 46, 24, 52, 20, 9]))
