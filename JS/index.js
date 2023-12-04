function sumOfElemetsinArray(arr) {
    console.log("original array: ",arr);
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}
const myArray = [10,20,30,40,50,60];
console.log("Sum of the elements in an Array:",sumOfElemetsinArray(myArray));

