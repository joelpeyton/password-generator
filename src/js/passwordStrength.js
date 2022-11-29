function calculatePermutations(includeUpper,
    includeLower,
    includeNumbers,
    includeSymbols, 
    passwordLength
) {
    let characterSetLength = 0;
    characterSetLength += includeUpper ? 26 : 0;
    characterSetLength += includeLower ? 26 : 0;
    characterSetLength += includeNumbers ? 10 : 0;
    characterSetLength += includeSymbols ? 11 : 0;
    return characterSetLength**passwordLength;
}

function passwordStrength(numberOfPermutations) {
    let strength;
    if (numberOfPermutations > 1e+24) {
        strength = 'STRONG';
    }
    else if (numberOfPermutations > 1e+14) {
        strength = 'MEDIUM';
    }
    else {
        strength = 'WEAK';
    }

    return strength;
}

function passwordColor(strength) {
    let color;
    if (strength === 'WEAK') {
        color = '#dc3545';
    }
    else if (strength === 'MEDIUM') {
        color = 'orangered';
    }
    else {
        color = '#198754';
    }
    return color;
}
export { calculatePermutations, passwordStrength, passwordColor };