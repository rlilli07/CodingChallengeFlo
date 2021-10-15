const func = (dataString) => {
	const openBrackets =  "{([";
	const closeBrackets = "})]";
	let bracketArr = dataString.slice(); //open and close brackets must match on index
	let stack = [];

	//to be balanced, num string characters must be even
	if(bracketArr.length % 2 !== 0) {
		return false;
	}

	for(let i = 0; i < bracketArr.length; ++i) {
		const bracket = bracketArr[i];

		if(openBrackets.includes(bracket)) {
			stack.push(bracket);
		}
		else {
			let stackTop = stack.pop();
			
			//closing brace must always have an open brace comparison else imbalanced
			if(!stackTop) {
				return false;
			}
			
			//abstract hashmap, mapping between open and close brackets is a shared index
			if(openBrackets.indexOf(stackTop) !== closeBrackets.indexOf(bracket)) {
				return false;
			}
		}
	}

	//stack should have had all elements popped off
	if(stack.length !== 0) {
		return false;
	}
	else {
		return true;
	}
}
