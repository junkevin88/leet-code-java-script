/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */
var flat = function (arr, n) {
    if (n <= 0) {
        return arr;
    }
    
    var flatArr = [];
    
    for (var i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
        flatArr = flatArr.concat(flat(arr[i], n - 1));
        } else {
        flatArr.push(arr[i]);
        }
    }
    
    return flatArr;
    
};