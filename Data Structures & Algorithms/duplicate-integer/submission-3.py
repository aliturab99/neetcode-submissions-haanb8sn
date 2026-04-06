class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        if len(nums) <= 1:
            return  False

        result = False
        for x in range(len(nums)):
            for j in range(x+1, len(nums)):
                if nums[x] == nums[j]:
                    return True
                else:
                    result = False
        return result