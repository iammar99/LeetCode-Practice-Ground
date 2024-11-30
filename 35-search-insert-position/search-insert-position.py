class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        left_pointer = 0
        right_pointer = len(nums) - 1

        for _ in range(len(nums)):
            mid = (left_pointer + right_pointer) // 2

            # If target is less than or equal to the smallest element
            if target <= nums[0]:
                return 0

            # If target is found
            if nums[mid] == target:
                return mid

            # If pointers converge, find insertion position
            elif right_pointer <= left_pointer:
                if target > nums[left_pointer]:
                    return left_pointer + 1
                else:
                    return left_pointer

            # Narrow the search range
            elif nums[mid] > target:
                right_pointer = mid - 1
            else:
                left_pointer = mid + 1