function quickSort(arr, left, right){
  if(left >= right){
    return;
  }
  let pivot = arr[Math.floor((left+right)/ 2)];
  let index = partition(arr, left, right, pivot);
  quickSort(arr, left, index - 1);
  quickSort(arr, index, right);

  return arr;

}

function partition(array, left, right, pivot){
  while(left <= right) {
    while(array[left] < pivot){
      left++;
    }
    while(array[right] > pivot){
      right--;
    }
    if(left <= right){
      swap(array, left, right);
      left++;
      right--;
    }
  }
  return left;
}

function swap(array, left, right){
  let temp = array[left];
  array[left] = array[right];
  array[right] = temp;
}

console.log(quickSort([1,2,7,3,10,5,4,8], 0, 7))
