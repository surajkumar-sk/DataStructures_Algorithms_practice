var maxSubArray = function(nums) {
  let highestSum = NaN;
  let sum = 0;  
  let beginning = 0;
  let ending = 0;
  for(let i = 0; i<nums.length; i++){
       sum = sum + nums[i];
       if(sum > 0){
        ending = i;
       } else {
        beginning = ending + 1;
        ending = ending + 1;
        sum = 0;
       }
       if(highestSum < sum || isNaN(highestSum) ){
        highestSum = sum;
       } 
  }
  if(highestSum == 0){
    highestSum = nums[0];
    for(let i=0;i<nums.length;i++){
      if(highestSum <= nums[i]){
        highestSum = nums[i];
      }
    }
  }

  return highestSum;
};
