function getSecondLargest(nums) {
    let max = nums[0];
    let secondmax = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > max) {
            secondmax = max;
            max = nums[i];
            continue;
        }       
        if ((nums[i] > secondmax) && (nums[i] < max)) {
            secondmax = nums[i];
        }
    }    
    return secondmax;
}
