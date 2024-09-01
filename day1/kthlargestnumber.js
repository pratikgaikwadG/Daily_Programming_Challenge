function kthLargest(arr, k) { 
    const min = arr.slice(0, k);
    min.sort((a, b) => a - b); 
    for (let i = k; i < arr.length; i++) {
        if (arr[i] > min[0]) {
            min[0] = arr[i];
            min.sort((a, b) => a - b); 
        }
    } 
    return min[0];
}
const arr = [3, 2, 1, 5, 6, 4];
const k = 2;
console.log(kthLargest(arr, k));  
