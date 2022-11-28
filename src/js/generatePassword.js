// ascii arrays
const lowerCase = [];
for (let i = 97; i < 123; i++) {
	lowerCase.push(i);
}
const upperCase = [];
for (let i = 65; i < 91; i++) {
	upperCase.push(i);
}
const numbers = [];
for (let i = 48; i < 58; i++) {
	numbers.push(i);
}
const symbols = [33, 35, 35, 38, 42, 43, 45, 61, 63, 64, 95];

// Returns an array of all possible choices as ascii numbers
function getArray(includeUpper, includeLower, includeNumbers, includeSymbols) {
	let combined = [];
    if (includeUpper) {combined = combined.concat(upperCase)};
	if (includeLower) {combined = combined.concat(lowerCase)};
	if (includeNumbers) {combined = combined.concat(numbers)};
	if (includeSymbols) {combined = combined.concat(symbols)};
	return combined;
}

// Generates a password 
function generatePassword(value, includeUpper, includeLower, includeNumbers, includeSymbols) {
	const combined = getArray(includeUpper, includeLower, includeNumbers, includeSymbols);
    let password = '';
    let rand;

	for (let i = 0; i < value; i++) {
		rand = combined[Math.floor(Math.random()*combined.length)]
		password += String.fromCharCode(rand);
	}
	
    return password;
}

export default generatePassword;