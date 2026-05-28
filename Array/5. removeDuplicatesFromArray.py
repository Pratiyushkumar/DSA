def brute_force_approach(arr):
    visited = set()
    index = 0
    for num in arr:
        if num not in visited:
            visited.add(num)
            arr[index] = num
            index += 1
    return index


# print(brute_force_approach([1, 1, 2, 2, 2, 3, 3]))

def optimal_appraoch(arr):
    i = 0
    for j in range(1, len(arr)):
        if arr[j] != arr[i]:
            i += 1
            arr[i] = arr[j]
    return i+1


print(optimal_appraoch([1, 1, 2, 2, 2, 3, 3]))
print(optimal_appraoch([1, 2, 3, 4, 5, 6]))
