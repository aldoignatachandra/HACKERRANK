//SOLUTION
const getSecondLargest = (nums) => {

    var first = nums[0];
    var second = nums[1];

    for (let i = 0; i < nums.length; i ++) {
        if (nums[i] > first) {
            second = first;
            first = nums[i];
        }

        if (nums[i] > second && nums[i] < first) {
            second = nums[i];
        }
    }

    return second;
}

//TEST
console.log(getSecondLargest([2,3,6,6,5]));