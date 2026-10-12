def bruteForce(arr):
    new_Arr = sorted(arr)
    n = len(new_Arr)
    largest = new_Arr[n-1]
    second_largest = -1
    for i in range(n-2, -1, -1):
        if largest > new_Arr[i]:
            second_largest = new_Arr[i]
            break
    return second_largest


# print(bruteForce([1, 2, 4, 7, 7, 5]))

def better_approach(arr):
    n = len(arr)
    largest = arr[0]
    second_largest = -1  # assuming list doesnot contain any negative element
    # if there would be any negative element, second_largest would be -Infinity
    for i in range(n):  # O(n)
        if (arr[i] > largest):
            largest = arr[i]

    for j in range(n):   # O(n)
        if arr[i] < largest and arr[i] > second_largest:
            second_largest = arr[i]

    return second_largest  # O(n+n) = O(2n)


# print(better_approach([1, 2, 4, 7, 7, 5]))

def optimal_approach(arr):
    n = len(arr)
    largest = arr[0]
    slargest = -1
    for i in range(n):
        if arr[i] > largest:
            slargest = largest
            largest = arr[i]
        elif arr[i] < largest and arr[i] > slargest:
            slargest = arr[i]

    return slargest


print(optimal_approach([1, 2, 4, 7, 7, 5]))
print(optimal_approach([1]))
