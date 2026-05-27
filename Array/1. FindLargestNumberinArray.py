def firstApproach(arr):
    return quick_sort(arr, 0, len(arr)-1)


def quick_sort(arr, low, high):
    if low < high:
        pi = find_pivot_index(arr, low, high)
        quick_sort(arr, low, pi-1)
        quick_sort(arr, pi+1, high)

    return arr


def find_pivot_index(arr, low, high):
    pivot = arr[low]
    i = low
    j = high

    while i < j:
        while arr[i] <= pivot and i <= high:
            i += 1

        while arr[j] > pivot and j >= low:
            j -= 1

        if i < j:
            [arr[i], arr[j]] = [arr[j], arr[i]]

    [arr[low], arr[j]] = [arr[j], arr[low]]
    return j


# print(firstApproach([2, 5, 1, 3, 0]))

def second_approach(arr):
    largest = arr[0]

    for i in range(1, len(arr)):
        if arr[i] > largest:
            largest = arr[i]

    return largest


print(second_approach([2, 5, 1, 3, 0]))
