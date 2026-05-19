class Solution:
    def QuickSort(self, arr, low, high):
        if (low < high):
            pi = self.findPivot(arr, low, high)
            self.QuickSort(arr, low, pi-1)
            self.QuickSort(arr, pi+1, high)

    def findPivot(self, arr, low, high):
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


arr = [4, 6, 2, 5, 7, 9, 1, 3]
s = Solution()
s.QuickSort(arr, 0, len(arr)-1)
print(arr)
