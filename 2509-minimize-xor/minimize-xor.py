class Solution:
    def minimizeXor(self, num1: int, num2: int) -> int:
        req_ones = bin(num2).count('1')
        x = 0
        for i in range(31, -1, -1): 
            if req_ones == 0:
                break
            if num1 & (1 << i):  # If the i-th bit in num1 is set
                x |= (1 << i)   # Set the same bit in x
                req_ones -= 1

        # If more bits are required, fill from the least significant bits
        for i in range(32):  # Iterate from the 0th bit to the 31st bit
            if req_ones == 0:
                break
            if not (x & (1 << i)):  # If the i-th bit in x is not set
                x |= (1 << i)      # Set the bit
                req_ones -= 1

        return x


