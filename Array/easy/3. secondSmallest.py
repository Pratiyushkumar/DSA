def optimal_solution(arr):
    n = len(arr)
    smallest = arr[0]
    s_smallest = float("inf")
    for i in range(n):
        if arr[i] < smallest:
            s_smallest = smallest
            smallest = arr[i]
        elif arr[i] < s_smallest and arr[i] != smallest:
            s_smallest = arr[i]

    return s_smallest


print(optimal_solution([1, 2, 4, 7, 7, 5]))
