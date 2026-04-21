class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;
        const sFreqMap = new Map();
        const tFreqMap = new Map();

        for(let char of s){
            sFreqMap.set(char, (sFreqMap.get(char) ?? 0) + 1)
        }
        for(let char of t){
            tFreqMap.set(char, (tFreqMap.get(char) ?? 0) + 1)
        }

        for(let [char, freq] of sFreqMap.entries()){
            if(!(tFreqMap.has(char) && tFreqMap.get(char) === freq)){
                return false;
            }
        }

        return true;
    }
}
