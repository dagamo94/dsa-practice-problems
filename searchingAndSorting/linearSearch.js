// LINEAR SEARCH AS A HIGHER ORDER FUNCTION

function indexOf(isMatch, elements) {
    if (Array.isArray(elements)) {
        for (let i = 0, length = elements.length; i < length; ++i) {
            if (isMatch(elements[i], i, elements)) return i;
        }
    }
    return -1;
}

module.exports = indexOf;

/*
    In this implementation, the algorithm goes through all of the elements in the array and calls isMatch(), passing in the element, index, and array. 
    The variable 'index' keeps track of where it is in the array. If isMatch() return true, it will return the current values for 'index'.
    But in cases where isMatch() returns false for every index of the array, '-1' is returned after the loop is done, indicating that the function didn't find the desired element
*/