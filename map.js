    function doubleAll(numbers) {
        result=[];
        numbers.map(function(currentValue){
            result.push(currentValue*2);
        });
        return result;
    }
    
    module.exports = doubleAll
