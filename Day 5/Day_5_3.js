function modifyArray(nums) {
    var data = n => n = (n%2) ? n*3 : n*2;
    var array = nums.map(data);
    return array;
}
