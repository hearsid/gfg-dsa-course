# python3 program to find if
# there is a zero sum subarray


def subArrayExists(arr, N):
	# traverse through array
	# and store prefix sums
	n_sum = 0
	s = set()

	for i in range(N):
		n_sum += arr[i]

		# If prefix sum is 0 or
		# it is already present
		if n_sum == 0 or n_sum in s:
			return True
		s.add(n_sum)

	return False


# Driver's code
if __name__ == '__main__':
	arr = [-3, 2, 3, 1, 6]
	N = len(arr)

	# Function call
	if subArrayExists(arr, N) == True:
		print("Found a sunbarray with 0 sum")
	else:
		print("No Such sub array exits!")

# This code is contributed by Shrikant13
