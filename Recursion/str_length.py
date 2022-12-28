str = "GeeksforGeeks"
 
# Function to
# calculate length
def string_length(str) :
     
    # if we reach at the
    # end of the string
    if str == '':
        return 0
    else :
        return 1 + string_length(str[1:])
     
# Driver Code
print (string_length(str))