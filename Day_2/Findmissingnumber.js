function findMissingNumber(arr) {
    const n = arr.length + 1;
    const totalSum = (n * (n + 1)) / 2;
    const arrSum = arr.reduce((sum, num) => sum + num, 0);
    return totalSum - arrSum;
}
const arr = [1, 2, 4, 5];
const missingNumber = findMissingNumber(arr);
console.log("Missing number:", missingNumber);
