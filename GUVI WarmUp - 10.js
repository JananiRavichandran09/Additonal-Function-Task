/* MacDonald is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:turkey = 2 legshorse = 4 legspigs = 4 legsThe farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals. */

function CountLegs(turkey, horse, pigs) {
	///Your code Starts here 
	
	const a = 2;
	const b = 4;
	const c = 4;
	
	const totalTurkeyLegs = turkey * a;
	const totalHorseLegs = horse * b;
	const totalPigLegs = pigs * c;
	
	const totalLegs = totalTurkeyLegs + totalHorseLegs + totalPigLegs;
	
	return totalLegs;
	
	
	
	///Your code Ends here
}
/*
Lines For TestCase

CountLegs(2, 3, 5);
CountLegs(1, 2, 3);
CountLegs(5, 2, 8);
*/