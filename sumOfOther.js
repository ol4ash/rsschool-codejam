function sumOfOther(array) {

let sum = array.reduce((acc, item)=> (acc+item));
let result = array.map(x => (sum-x));

return result;
}