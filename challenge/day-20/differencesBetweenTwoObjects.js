/**
 * @param {object} obj1
 * @param {object} obj2
 * @return {object}
 */
function objDiff(obj1, obj2) {

    // Check if obj1 is an object
    if (typeof obj1 === 'object') {
        // Get the keys of obj1
        const keys1 = Object.keys(obj1);

        // Iterate over each key of obj1
        const properties1 = keys1.map(key => {
            // Check if obj2 has the same key
            if (obj2.hasOwnProperty(key)) {
                // Check if the values of the keys are the same
                if (obj1[key] === obj2[key]) {
                    // Return the key and value
                    return `"${key}":${obj1[key]}`;
                } else {
                    // Return the key and values of both objects
                    return `"${key}":${obj1[key]}, "${key}":${obj2[key]}`;
                }
            } else {
                // Return the key and value
                return `"${key}":${obj1[key]}`;
            }
        });

        // Return the stringified properties of obj1
        return `{${properties1.join(',')}}`;
    }

    // Check if obj2 is an object
    if (typeof obj2 === 'object') {
        // Get the keys of obj2
        const keys2 = Object.keys(obj2);

        // Iterate over each key of obj2
        const properties2 = keys2.map(key => {
            // Check if obj1 has the same key
            if (obj1.hasOwnProperty(key)) {
                // Check if the values of the keys are the same
                if (obj1[key] === obj2[key]) {
                    // Return the key and value
                    return `"${key}":${obj2[key]}`;
                } else {
                    // Return the key and values of both objects
                    return `"${key}":${obj1[key]}, "${key}":${obj2[key]}`;
                }
            } else {
                // Return the key and value
                return `"${key}":${obj2[key]}`;
            }
        });

        // Return the stringified properties of obj2
        return `{${properties2.join(',')}}`;
    }

    return undefined; // Return undefined if obj1 or obj2 is not an object
    
};