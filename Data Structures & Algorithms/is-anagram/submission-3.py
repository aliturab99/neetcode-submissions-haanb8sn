class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False

        result = { 's': {}, 't': {} }
        for char in s:
            if char not in result['s']:
                result['s'][char] = 0
            result['s'][char] += 1

        for char in t:
            if char not in result['t']:
                result['t'][char] = 0
            result['t'][char] += 1

        return(result['s'] == result['t'])