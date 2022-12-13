var checkIfPangram = function(sentence) {
        if(sentence.length < 26) return false
        const map = new Set()
        for(let i =0; i < sentence.length; i++) {
            if (!map.has(sentence[i])) map.add(sentence[i])
        }
        if (map.size < 26) return false
        return true
};