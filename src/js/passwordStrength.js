function calculatePermutations(passwordLength,
    includeUpper,
    includeLower,
    includeNumbers,
    includeSymbols
) {
    let characterSetLength = 0;
    characterSetLength += includeUpper ? 26 : 0;
    characterSetLength += includeLower ? 26 : 0;
    characterSetLength += includeNumbers ? 10 : 0;
    characterSetLength += includeSymbols ? 11 : 0;
    return characterSetLength**passwordLength;
}

function getPasswordStrength(numberOfPermutations) {
    let strength;
    if (numberOfPermutations > 1e+24) {
        strength = 'STRONG';
    }
    else if (numberOfPermutations > 1e+14) {
        strength = 'GOOD';
    }
    else {
        strength = 'WEAK';
    }

    return strength;
}

function getPasswordColour(strength) {
    let color;
    if (strength === 'WEAK') {
        color = '#dc3545';
    }
    else if (strength === 'GOOD') {
        color = '#ffc107';
    }
    else {
        color = '#198754';
    }
    return color;
}
export { calculatePermutations, getPasswordStrength, getPasswordColour };