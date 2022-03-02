// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

//([1, 2, 3, 4],5, 2) 
function chunk(array, size) 
{
    var chunkedArray = [];
    for(var i=0; i< array.length; i = i+size)
    {
        var arrChunk = [];
        for(var j=i; j< i+size && j< array.length; j++)
        {
            arrChunk.push(array[j]);
        }
        chunkedArray.push(arrChunk);;
    }
    return chunkedArray;
}

module.exports = chunk;
