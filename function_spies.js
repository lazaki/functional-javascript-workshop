function Spy(target, method) {
    // SOLUTION GOES HERE
    var fn = target[method]
    var obj = {
        count: 0
    }
    target[method] = function() {
        obj.count ++;
        return fn.apply(null,arguments);
    }
    return obj;
}

module.exports = Spy