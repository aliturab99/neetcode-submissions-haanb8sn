class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
    if(nums.length == 0 || nums.length == 1){
        return false
    }

    let check = {}
    for( let i = 0; i < nums.length; i++){

        if(!check[`${nums[i]}`]) {
            check[`${nums[i]}`] = true
        } else {
            return true
        }
    }
    return false
}
}
