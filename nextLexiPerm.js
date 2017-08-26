// /**
//  * @param {number[]} nums
//  * @return {void} Do not return anything, modify nums in-place instead.
//  */
var nextPermutation = function(nums) {
    for(var index = nums.length - 1; index >= 0; index--){
        if(nums[index] > nums[index - 1]){
            index--;
            break;
        }
    }
    if(index < 0) {
        nums.reverse();
        return;
    }
    for(var slightBig = index; slightBig < nums.length; slightBig++){
        if(nums[slightBig] > nums[index] && nums[slightBig + 1] <= nums[index]) {
            swap(nums, index, slightBig);
            break;
        } else if(slightBig + 1 == nums.length){
            swap(nums, index, slightBig);
        }
    }
    for(let i = 0; i < Math.floor((nums.length - index) / 2); i++){
        swap(nums, i + index + 1, nums.length - i - 1);
    }
};

function swap(arr, i1, i2){
    let temp = arr[i1];
    arr[i1] = arr[i2];
    arr[i2] = temp;
}
