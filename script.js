function flattenArray(array) {
    const flat = [];
    (function toFlat(arr) {
        arr.forEach((elem) => {
            if(Array.isArray(elem)) {
                toFlat(elem);
            } else {
                flat.push(elem)
            }
        });
    })(array);
    return flat;
}

console.log(flattenArray([[1,2,3],[3,5,6], 1, [[123]]]));