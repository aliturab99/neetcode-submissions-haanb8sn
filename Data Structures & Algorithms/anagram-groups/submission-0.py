class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        anagrams = {}
        for i, val in enumerate(strs):
            sorted_str = ''.join(sorted(val))
            if sorted_str in anagrams:
                anagrams[sorted_str].append(val)
            else:
                anagrams[sorted_str] = []
                anagrams[sorted_str].append(val)
        return anagrams.values()