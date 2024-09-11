function findDuplicate(arr) {
    let slow = arr[0];
    let fast = arr[0];   
    do {
        slow = arr[slow];
        fast = arr[arr[fast]];
    } while (slow !== fast);    
    fast = arr[0];
     while (slow !== fast) {
        slow = arr[slow];
        fast = arr[fast];
    } 
    return slow;
}
console.log(findDuplicate([1, 3, 4, 2, 2])); 
console.log(findDuplicate([3, 1, 3, 4, 2])); 
console.log(findDuplicate([1, 1])); 
console.log(findDuplicate([1, 4, 4, 2, 3])); 
