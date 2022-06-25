
/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {number[]}
*/

class Solution{
    getMinMax(arr,n){
        if(arr.length === n){
        let max = arr[0];
        let min = arr[0];
        arr.forEach(ele => {
          if(ele > max){
            max = ele;
          }
          if(ele < min){
            min = ele;
          }
        });
        return [min,max]
      } else {
        console.log("arr length and n doesnt match")
      }
    }
}
