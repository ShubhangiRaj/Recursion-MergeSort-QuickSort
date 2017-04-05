function quickSort(arr, start, end){
   var len = arr.length, 
   pivot,
   partitionIndex;


  if(start < end){
    pivot = end;
    partitionIndex = partition(arr, pivot, start, end);
    
   //sort left and right
   quickSort(arr, start, partitionIndex - 1);
   quickSort(arr, partitionIndex + 1, end);
  }
  return arr;
}
function partition(arr, pivot, start, end){
   var pivotValue = arr[pivot],
       partitionIndex = start;

   for(var i = start; i < end; i++){
    if(arr[i] < pivotValue){
      swap(arr, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(arr, end, partitionIndex);
  return partitionIndex;
}
function swap(arr, i, j){
   var temp = arr[i];
   arr[i] = arr[j];
   arr[j] = temp;
}
console.log(quickSort([-1,11,8,14,-2,3,6,0,2,7],0,9));


// function partition(array, start, end){
//     var pivot = array[end]; //pivot is the rightmost element of the array
//     var pIndex = array[start]; // partition index 'pIndex' is the first index of the array
    
//     for(var i = 0; i<array.length; i++){
//         if(array[i] <= pivot){
//             var temp = array[i];
//             array[i] = array[pIndex];
//             array[pIndex] = temp;
//             pIndex++;
//         }
//     }
//     var temp2 = array[pIndex];
//     array[pIndex] = array[end];
//     array[end] = temp2;
//     return pIndex;  
// }
// ​
// function QuickSort(array, start, end){
//     if(start < end){
//         var pIndex = partition(array, start, end);
//         QuickSort(array, start, pIndex);
//         QuickSort(array, pIndex+1, end);
//     }
// }