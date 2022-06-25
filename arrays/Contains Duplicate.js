// //User function Template for javascript

// /**
//  * @param {number[]} arr
//  * @param {number} n
//  * @param {number} m
//  * @returns {number}
// */

// class Solution{
//   findMinDiff(arr,n,m){
//       let sortedarr = this.mergeSort(arr);

//   }

//   mergeSort(arr){
//     n = arr.length;
//     let splitIndex = 0;
    
//     if(n <=2 ){
//       if(n==2){
//         if(arr[0] >= arr[1]){
//           return [ arr[1], arr[0]];
//         } else {
//           return [arr[0],arr[1]];
//         }
//       } else {
//         return arr[0];
//       }
//     }
    
//     if(n%2 == 0){
//       splitIndex = n/2;
//     } else{
//       splitIndex = parseInt(n/2);
//     }
//     let leftArr = arr.slice(0,splitIndex);
//     let rightArr = arr.slice(splitIndex,arr.length);

//     let leftarrsorted = this.mergeSort(leftArr);
//     let rightarrsorted = this.mergeSort(rightArr);
//     return this.merge(leftarrsorted,rightarrsorted);

//   }


//   merge(arr1,arr2){
//     let newarr= [];
//     if(arr1[0]>arr2[0]){
//       newarr = arr2.push(arr1);
//     } else {
//       newarr = arr1.push(arr2);
//     }
//     return newarr;
//   }
// }
