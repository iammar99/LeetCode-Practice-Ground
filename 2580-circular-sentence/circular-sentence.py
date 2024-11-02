class Solution:
    def isCircularSentence(self, sentence: str) -> bool:
        firstChar = sentence[0]
        ans = True
        for i in range(len(sentence)):
            char = ""
            if i+1 >= len(sentence) or sentence[i+1] == " " :
                char = sentence[i]
                if i + 2 >= len(sentence):
                    ans =  char == firstChar
                else:
                    ans =  char == sentence[i + 2]
            if ans == False:
                return False
        
        return ans