class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        nums.sort()  # Sort the input list
        res = []  # This will store the triplets
        for i in range(len(nums)):
            # Skip duplicate values for the current number
            if i > 0 and nums[i] == nums[i - 1]:
                continue
            
            left_pointer = i + 1
            right_pointer = len(nums) - 1
            
            while left_pointer < right_pointer:
                sum = nums[i] + nums[left_pointer] + nums[right_pointer]
                
                if sum == 0:
                    res.append([nums[i], nums[left_pointer], nums[right_pointer]])
                    
                    # Move the left_pointer to the next different number
                    while left_pointer < right_pointer and nums[left_pointer] == nums[left_pointer + 1]:
                        left_pointer += 1
                    
                    # Move the right_pointer to the previous different number
                    while left_pointer < right_pointer and nums[right_pointer] == nums[right_pointer - 1]:
                        right_pointer -= 1
                    
                    # Move both pointers after recording a valid triplet
                    left_pointer += 1
                    right_pointer -= 1
                
                elif sum > 0:
                    right_pointer -= 1  # Decrease sum by moving right_pointer leftward
                else:
                    left_pointer += 1  # Increase sum by moving left_pointer rightward
        
        return res