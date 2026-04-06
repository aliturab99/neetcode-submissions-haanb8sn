class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(!s.length || !t.length || s.length !== t.length) return false;
    const check = {'1': {}, '2': {}, 'result': false}
    
    for( let i = 0; i < s.length; i++ ){
        if(!check['1'][`${s[i]}`]){
            check['1'][`${s[i]}`] = 1
        } else {
            check['1'][`${s[i]}`] += 1
        }

        if(!check['2'][`${t[i]}`]){
            check['2'][`${t[i]}`] = 1
        } else {
            check['2'][`${t[i]}`] += 1
        }
    }
    
    for (const key in check[1]) {
        if(!check[2][key]) {
            check['result'] = false;
            console.log('abc 1')
            break;
        };
        if(check[1][key] === check[2][key]){
            console.log('abc 2')
            check['result'] = true;
        } else {
            console.log('abc 3')
            check['result'] = false;
            break;
         }
    }
    return check['result']
    }
}
