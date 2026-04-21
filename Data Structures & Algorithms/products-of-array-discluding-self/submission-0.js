class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {

        const length = nums.length;

        let res = [1];

        //left Product
        for(let i = 1; i< length; i++){
            res[i] = res[i-1] * nums[i-1] 
        }

        let rightProduct = 1;
        for(let i = length-1; i>=0; i--){
            res[i] *= rightProduct;
            rightProduct *= nums[i]

            if(res[i] === -0){
                res[i] = 0
            }
        }

       return res
    }
}
