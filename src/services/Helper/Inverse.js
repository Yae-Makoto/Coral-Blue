export function createInverseDictionary(d) {
    var newObj = {};
    for (const key of Object.keys(d)) {
        newObj[d[key]] = key;
    }
    return newObj;
}