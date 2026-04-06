class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        for x in range(len(nums)):
            for j in range(x + 1, len(nums)):
                if nums[x] == nums[j]:
                    return True
        return False