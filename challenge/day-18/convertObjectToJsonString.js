/**
 * @param {any} object
 * @return {string}
 */
var jsonStringify = function(object) {
    // Check if object is a string
    if (typeof object === 'string') {
        return `"${object}"`; // Return the string wrapped in double quotes
    }
    
    // Check if object is a number
    if (typeof object === 'number') {
        return `${object}`; // Return the number as a string
    }
    
    // Check if object is a boolean
    if (typeof object === 'boolean') {
        return `${object}`; // Return the boolean as a string
    }
    
    // Check if object is null
    if (object === null) {
        return 'null'; // Return the string "null"
    }
    
    // Check if object is undefined
    if (typeof object === 'undefined') {
        return undefined; // Return undefined
    }
    
    // Check if object is an array
    if (Array.isArray(object)) {
        // Iterate over each element of the array
        const elements = object.map(element => {
        // Recursively call jsonStringify for each element
        return jsonStringify(element);
        });
    
        return `[${elements.join(',')}]`; // Return the stringified elements of the array
    }
    
    // Check if object is an object
    if (typeof object === 'object') {
        // Get the keys of the object
        const keys = Object.keys(object);
    
        // Iterate over each key of the object
        const properties = keys.map(key => {
        // Recursively call jsonStringify for each property value
        const propertyValue = jsonStringify(object[key]);
    
        // Return the stringified property
        return `"${key}":${propertyValue}`;
        });
    
        return `{${properties.join(',')}}`; // Return the stringified properties of the object
    }
    
    return undefined; // Return undefined if object is not a string, number, boolean, null, undefined, array, or object
    
};