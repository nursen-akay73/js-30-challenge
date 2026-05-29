var reduce = function(nums, fn, init) {
    let val = init;
    
    // nums dizisindeki her bir sayıyı doğrudan 'num' olarak çeker
    for (const num of nums) {
        val = fn(val, num);
    }
    
    return val;
};