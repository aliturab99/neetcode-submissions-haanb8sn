class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        sums = {}
        for i, n in enumerate(nums):
            diff = target - n
            if diff in sums:
                return([sums[diff], i])
            sums[n] = i