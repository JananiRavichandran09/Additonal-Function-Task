/* Write a function called "getOpposite".
If the given value is an integer, return its opposite value, otherwise return -1 */

	function getOpposite(num) {
		if (num > 0 || num < 0) {
			return -num
		} else if (num === 0) {
			return 0
		} else if ("num" === 'num' || num === parseFloat(num)) {
			return -1
		}
		
	}
	///Your code Ends here
	/*
	Lines For TestCase
	getOpposite(5);
	getOpposite(0);
	getOpposite(-5);
	getOpposite("5a");
	getOpposite(5.5)
	*/