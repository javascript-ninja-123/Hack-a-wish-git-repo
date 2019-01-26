
/**
 * returns true if the input is a string, flase if its not..
 * @param {*} s 
 * @returns {boolean}
 */
export function isString( s ) {
    if ( !nullOrUndefined(s) && typeof s === 'string') {
        return true;
    } else {
        return false;
    }
}

/**
 * returns a true if the input is an array, else returns false.
 * @param {*} x 
 * @returns {boolean}
 */
export function isArray( x ) { 
    return ( !nullOrUndefined(x) && Array.isArray(x) );
}

/**
 * returns ture if the input is a function, false if not.
 * @param {*} y 
 * @returns {boolean}
 */
export function isFunction( y ) { 
    return !nullOrUndefined(y) && {}.toString.call(y) === '[object Function]';
}

/**
 * returns true if the input is a string, throws an error if its not.
 * @param {*} s 
 */
export function validateString( s ) {
    if ( this.isString(s) ){
        return true;
    } else {
        throw 'this input is not a string.';
    }
}

/**
 * turns true if the input is an array, throws an error if it is not.
 * @param {*} x 
 * @returns {boolean}
 */
export function validateArray( x ) {
    if ( this.isArray(x) ) {
        return true;
    } else {
        throw ' this input is not an array.';
    }
}

/**
 * returns true if the input is an object, throws an error if it is not.
 * @param {*} y 
 * @returns {boolean}
 */
export function validateObject( y ) {
    return ( typeof y === 'object' );
}

export function nullOrUndefined( s ) {
    return ( s === null || s === undefined);
}