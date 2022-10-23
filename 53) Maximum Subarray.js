const maxSubArray = function(nums) {
    let max = -Infinity;
    let cur = 0;
    for(let i = 0; i < nums.length ; i++){
        cur = Math.max(nums[i],cur + nums[i]);
        max = Math.max(cur,max);
    }
    return max;
};
