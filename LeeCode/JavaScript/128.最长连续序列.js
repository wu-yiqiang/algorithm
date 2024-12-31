const longestConsecutive = (arrs) => {
    if (!Array.isArray(arrs) || !arrs.length) return 0;
    if (arrs.length == 1) return 1;
    const arrays = Array.from(new Set(arrs.sort((a, b) => a - b)))
    console.log('arrays', arrays);
    let collection = [0];
    let max = 0;
    let i = 0;
    while (i < arrays.length) {
        const element = arrays[i];
        let j = i + 1;
        if (
            (j < arrays.length && element + 1 != arrays[j]) ||
            i + 1 == arrays.length
        ) {
            collection.push(j);
            i = j;
        } else {
            i++;
        }
    }
    let t = 0;
    while (t < collection.length) {
        const k = t + 1;
        if (k < collection.length) {
            const data = collection[k] - collection[t];
            if (max < data) max = data;
        }
        t++;
    }
    return max;
};