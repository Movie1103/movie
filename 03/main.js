const mergeObjects = (...objects) => Object.assign({}, ...objects.reverse());
console.log(mergeObjects({ a: 1, b: 2 }, { c: 3 }, { c: 1, b: 5 }));
