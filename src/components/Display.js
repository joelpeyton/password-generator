import generatePassword from "../js/generatePassword";

function Display({ charLength, includeUpper, includeLower, includeNumbers, includeSymbols }) {
    let password = generatePassword(charLength, includeUpper, includeLower, includeNumbers, includeSymbols);

    return (
        <div className="container p-3">
            <div className="display">
                {password}
            </div>
        </div>
    );
}

export default Display;
