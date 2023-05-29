/**
 * @param {any} obj
 * @param {any} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function(obj, classFunction) {
    return obj instanceof classFunction;
    
    
};

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */