class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let result = []
        nums.map((sn, j) => {
                for(let i = (j+1); i < nums.length; i++){
                    if(sn+ nums[i] === target) result = [j,i]
                }
            }
        )
        return result
    }
}
