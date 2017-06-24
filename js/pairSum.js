/**
 * Google interview question
 * 
 * Find a PAIR of numbers in a SORTED array whose sum is equal to a given number.
 * Brute force approach O(n^2)
 *  For each number, try all other numbers for a match.
 * @param arr The array of numbers.
 * @param sum The sum to find.
 */
function pairSumBrute(arr, sum) {
	
	for (var i = 0; i < arr.length - 1; i++) {
		for (var j = i+1; j < arr.length; j++) {
			
			if (arr[i] + arr[j] === sum) return true;
			
		}
	}
	
	return false;
	
}

/**
 * Find a PAIR of numbers in a SORTED array whose sum is equal to a given number.
 * Binary search approach. O(n^2)
 *  For each number, binary search for a match.
 * @param arr The array of numbers.
 * @param sum The sum to find.
 */
function pairSumOffset(arr, sum) {
		
	for (var i=0; i<arr.length-1; i++) {
		
		// Get offset for the current index.
		var offset = sum - arr[i];
		
		// Binary search for the offset.
		for (var j=i+1; j<arr.length; j++) {
			
			// Stop once the offset is passed.
			if (arr[j] > offset) break;
			
			else if (arr[j] === offset) return true;
			
		}
		
	}
	
	return false;
	
}

/**
 * Find a PAIR of numbers in a SORTED array whose sum is equal to a given number.
 * 	Use pointers starting at the first and last indices and work your way towards the middle. O(logn)
 * @param arr The array of numbers.
 * @param sum The sum to find.
 */
function pairSumOptimal(arr, sum) {

	// Start with first and last indices.
	var lo = 0;
	var hi = arr.length - 1;

	while (lo < hi) {

		// Compute sum
		var res = arr[lo] + arr[hi];

		// If sum if too low, move left ptr.
		if (res < sum) lo++;
		
		// If sum is too high, move right ptr.
		if (res > sum) hi--;
		
		if (res === sum) return true;

	}
	
	return false;
	
}

/**
 * Time comparison for WC find of each algorithm
 */
var i = 0;
var randomArray = [];

// Populate array
while (i < 10000000) {
	randomArray[i] = Math.floor((Math.random() * 998) + 1);
	i++;
}

// Sort array
randomArray.sort(function(a, b){return a-b});

// Last element in the array
var num = randomArray[randomArray.length-1];

// Brute force (n^2)
console.time('pairSumBrute');
pairSumBrute(randomArray, num);
console.timeEnd('pairSumBrute');

// Offset (n^2)
console.time('pairSumOffset');
pairSumOffset(randomArray, num);
console.timeEnd('pairSumOffset');

// Optimal (logn)
console.time('pairSumOptimal');
pairSumOptimal(randomArray, num);
console.timeEnd('pairSumOptimal');