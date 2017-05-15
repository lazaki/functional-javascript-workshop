module.exports = function arrayMap(arr, fn) {
    var reducedArray = []
    arr.reduce((acc, element) => {
        reducedArray.push(fn(element));
    }, []
    );
    return reducedArray;
}