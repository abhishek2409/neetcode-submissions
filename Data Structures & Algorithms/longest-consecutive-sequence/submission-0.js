class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (!nums.length) return 0;

        nums.sort((a, b) => a - b);

        let count = 1,
            max = 1;
        for (let i = 1; i < nums.length; i++) {
            if (nums[i] - nums[i - 1] === 1) {
                count++;
                max = Math.max(max, count);
            } else if (nums[i] === nums[i - 1]) {
                continue;
            } else {
                count = 1;
            }
        }
        return max
    }
}
