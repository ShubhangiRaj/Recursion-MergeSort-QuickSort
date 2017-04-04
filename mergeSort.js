function sort(array) {

    var length = array.length,
        mid    = Math.floor(length * 0.5),
        left   = array.slice(0, mid),
        right  = array.slice(mid, length);

    if(length === 1) {
        return array;
    }

    return merge(sort(left), sort(right));

}

function merge(left, right) {

    var result = [];

    while(left.length || right.length) {

        if(left.length && right.length) {

            if(left[0] < right[0]) {
                result.push(left.shift());
            } else {
                result.push(right.shift());
            }

        } else if (left.length) 
        {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }

    }

    return result;

}
var unsortedArray = [2,3,1,7,5,9];
console.log(sort(unsortedArray));