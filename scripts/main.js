const letters = document.querySelector("#letters");
const capitals = document.querySelector("#mixed");
const punctuation = document.querySelector("#punctuation");
const numbers = document.querySelector("#numbers");
const slider = document.querySelector("#rangeSlider");
const passwordLength = document.querySelector("#length");
const password = document.querySelector("#password");
const refresh = document.querySelector("#refresh");
const copy = document.querySelector("#copy");
const strengthText = document.querySelector("#strengthText");
const strength = document.querySelector("#strength");
const icon = document.querySelector("#icon");

// ascii arrays
const lettersArray = [];
for (i = 97; i < 123; i++) {
	lettersArray.push(i);
}
const capitalsArray = [];
for (i = 65; i < 91; i++) {
	capitalsArray.push(i);
}
const numbersArray = [];
for (i = 48; i < 58; i++) {
	numbersArray.push(i);
}
const puncsArray = [33, 35, 35, 38, 42, 43, 45, 61, 63, 64, 95];

// event listeners
letters.addEventListener("change", checkOptions);
capitals.addEventListener("change", checkOptions);
punctuation.addEventListener("change", checkOptions);
numbers.addEventListener("change", checkOptions);
refresh.addEventListener("click", ()=> generate(slider.value));
copy.addEventListener("click", copyText);

// Copy text to clipboard
function copyText() {
	text = password.innerText;
	navigator.clipboard.writeText(text).then(function() {
		copy.innerText = "Copied";
		setTimeout(function() {
			copy.innerText = "Copy Password";
		}, 500);
	});
}

// Returns an array of all possible choices as ascii numbers
function getArray() {
	let combined = [];
	if (letters.checked) {combined = combined.concat(lettersArray)};
	if (capitals.checked) {combined = combined.concat(capitalsArray)};
	if (punctuation.checked) {combined = combined.concat(puncsArray)};
	if (numbers.checked) {combined = combined.concat(numbersArray)};
	return combined;
}

// Changes colour and text of password strength elements
function changeStrength(value) {
	let btnClass, text, iconClass, color;
	if (value < 1e+24) {
        btnClass = "btn btn-danger mb-1";
        text = "Bad ";
        iconClass = "fas fa-exclamation-triangle pr-2";
        color = "#c0392b";
	} else {
		btnClass = "btn btn-success mb-1";
		text = "Good ";
        iconClass = "fas fa-check-circle pr-2";
        color = "#27ae60";
	}

	password.style.color = color;
	password.style.borderColor = color;
	strength.className = btnClass;
	strengthText.textContent = text;
	icon.className = iconClass;
}

// Calculates total number of permutations 
function calculatePerms(value) {
	const set = value;
	const chosen = slider.value;
	const total = set**chosen;
	// perms.textContent = total;
	return total;
}

// Generates a password and displays to screen
function generate(value) {
	const combined = getArray();
    const anArray = [];
    let i, rand;
	for (i = 0; i < value; i++) {
		rand = combined[Math.floor(Math.random()*combined.length)]
		anArray.push(String.fromCharCode(rand));
	}
	const passwd = anArray.join("");
	password.innerText = passwd;
	const perms = calculatePerms(combined.length);
	changeStrength(perms);
}

// Display chosen password on page load
generate(slider.value);

// Display password length as slider valve
passwordLength.innerHTML = slider.value;

// Slider onchange 
slider.oninput = function() {
	if (this.value < 4) {
		this.value = 4;
		return;
	}
	passwordLength.innerHTML = this.value;
	generate(this.value);
}

// Checkbox logic
function checkOptions() {
	if (!letters.checked) {
		capitals.disabled = true;
		capitals.checked = false;
	} else {
		capitals.disabled = false;
	}
	
	if (punctuation.checked && !numbers.checked) {
		letters.checked = true;
		capitals.disabled = false;
	}

	if(!punctuation.checked && !numbers.checked) {
		letters.checked = true;
		capitals.disabled = false;
	}

	generate(slider.value);
}














