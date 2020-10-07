/*This function should accept an array and value and return the index at which the value exists or `-1` if the value can not be found. Do **not** use `indexOf` to solve this! This function should use iteration not recursion.  linearSearch
*/
function linearSearch(arr,value){
    for(var i=0; i<arr.length; i++){
        if(arr[i]==value){
            return i;

        }
    }
      return -1;
    }

/*linearSearchRecursive
If you have not yet implemented this (it is a bonus in the recursion exercise). This function should accept an array and value and return the index at which the value exists or `-1` if the value can not be found. Do **not** use `indexOf` to solve this! This function should use recursion.*/

function linearSearchRecursive(arr,value) {
    let arrlen = arr.length - 1;
    if(arr.length < 1) {
        return -1;
    }else if(arr[arrlen] === value) {
        return arrlen;
    }
    return linearSearchRecursive(arr.slice(0,arr.length - 1),value);
}

/*binarySearch

This function should accept an array and value and return the index at which the value exists or `-1` if the value can not be found. Do **not** use `indexOf` to solve this! This function should use iteration not recursion. Make sure that your algorithm runs in _O(log(n))_ and not _O(n)_.
 */
function bSearch(array, value, l, r) {
    if (l > r) return -1;
    
    var midPoint = Math.floor((l + r) / 2);
    
    if (value == array[midPoint])
        return midPoint;
    
    else if (value > array[midPoint])
        return bSearch(array, value, midPoint + 1, r);
    
    else
        return bSearch(array, value, l, midPoint - 1);
    }
    
    function binarySearch(array, value) {
        return bSearch(array, value, 0, array.length);
    }

    /*binarySearchRecursive

If you have not yet implemented this (it is a bonus in the recursion exercise). This function should accept an array and value and return the index at which the value exists or `-1` if the value can not be found. Do **not** use `indexOf` to solve this! This function should use recursion. Make sure that your algorithm runs in _O(log(n))_ and not _O(n)_. */
function binarySearchRecursive(arr,value,st,end=arr.length-1){
    let sortArr = arr.sort((a,b)=>a-b);
    let start = st || 0;
    if(start <= end) {
        let midPoint = Math.floor((start+end)/2);
         if(value === sortArr[midPoint]) {
            return midPoint;
    }else if(sortArr[midPoint] > value) {
       return binarySearchRecursive(sortArr,value,start,midPoint-1);
    }else {
     return binarySearchRecursive(sortArr,value,midPoint+1,end);
    }
}
    return -1;
}