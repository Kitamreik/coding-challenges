# Write a function to return the sum of the numbers in the given array 'nums', except ignore sections of numbers starting with a 7 and extending to the next 8 (every 7 will be followed by at least one 8). 
# Return 0 for no numbers.

# sum78([1, 2, 2]) → 5
# sum78([1, 2, 2, 7, 99, 99, 8]) → 5
# sum78([1, 1, 7, 8, 2]) → 4

def sum78(nums):
    total_sum = 0;
    in_section = False;
    for num in nums:
        print(num) 
        if num == 7:
            print("flag change")
            in_section = True
        elif num == 8:
            print("end the section and start adding numbers to the sum again.")
            in_section = False
            #print("Check", num + total_sum) #incorrect
            #print("Check 2", num += total_sum) #incorrect 
            #print("Correct", total_sum = total_sum += num)
            
            total_sum += num
            #add the current number num to total_sum. This ensures that only numbers outside of the 7-8 sections are included in the sum.
       
        return total_sum; #which now contains the sum of all valid numbers that are not in any 7-8 sections.


 # Change "===" to "==" on line 13.

 # Change "===" to "==" on line 13.

 # Change "for i in range(nums):" to "for num in nums:" on line 11.

 # Change "for num in range(nums):" to "for num in nums:" on line 11.

 # Fix the invalid syntax on line 20 by changing "num += total_sum" to "total_sum += num".

 # Fix the invalid syntax on line 21 by changing "total_sum += num" to "total_sum = total_sum + num".

 # Fix the syntax error by changing "total_sum = total_sum += num" to "total_sum += num" on line 21.

 # Fix the invalid syntax on line 21 by changing "total_sum = total_sum += num" to "total_sum += num".

 # Fix the invalid syntax on line 23 by changing "total_sum = total_sum += num" to "total_sum += num".