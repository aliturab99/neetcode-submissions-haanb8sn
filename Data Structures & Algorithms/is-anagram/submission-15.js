class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(!s.length || !t.length || s.length !== t.length ) return false
        if(s.length === 1 && t.length === 1 && s[0] !== t[0] ) return false
        if(s.length === 1 && t.length === 1 && s[0] == t[0] ) return true
        
        let check = {
            s:{},
            t:{}
        }
        
        for(let i = 0; i < s.length; i++){
            if(!check.s[`${s[i]}`]) check.s[`${s[i]}`] = 1
            else check.s[`${s[i]}`] = (check.s[`${s[i]}`] + 1)
            if(!check.t[`${t[i]}`]) check.t[`${t[i]}`] = 1
            else check.t[`${t[i]}`] = (check.t[`${t[i]}`] + 1)
        }
    
        const isEqual = (a, b) => {
        return Object.keys(a).length === Object.keys(b).length &&
            Object.keys(a).every(key => a[key] === b[key]);
        }
    
        return(isEqual(check.s, check.t))
    }
}
