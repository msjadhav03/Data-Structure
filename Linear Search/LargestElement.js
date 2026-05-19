//  Problem statement find : Largest element in give array

// Solution first - Linear Search - Time Complexity : O(n), Space Complexity : O(1)

function linearSearchSoln1(arr) {
  let maxElement = arr[0]
  for(let i=0; i< arr.length;i++){
    if(maxElement > arr[i])
    {
      maxElement = arr[i]
    }
  }
  return maxElement;
}

// Solution Second : Using default Math.max()

function defaultMethodMax(arr){
  return Math.max(...arr);
}

