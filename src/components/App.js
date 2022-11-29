import Header from "./Header";
import Display from "./Display";
import Controller from "./Controller";
import { useState } from "react";
import generatePassword from "../js/generatePassword";
import { calculatePermutations, getPasswordStrength, getPasswordColour } from "../js/passwordStrength";

function App() {
    const [charLength, setCharLength] = useState(16);
    const [includeUpper, setIncludeUpper] = useState(true);
    const [includeLower, setIncludeLower] = useState(true);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSymbols, setIncludeSymbols] = useState(true);
    const [password, setPassword] = useState(
        generatePassword(
            charLength, 
            includeUpper, 
            includeLower, 
            includeNumbers, 
            includeSymbols
        )
    );
    const [numberOfPerms, setNumberOfPerms] = useState(
        calculatePermutations(
            includeUpper, 
            includeLower, 
            includeNumbers, 
            includeSymbols,
            charLength
        )
    );
    const [passwordStrength, setPasswordStrength] = useState(
        getPasswordStrength(numberOfPerms)
    );
    const [passwordColour, setPasswordColour] = useState(
        getPasswordColour(passwordStrength)
    );

    function handleSliderChange(e) {
        setCharLength(parseInt(e.target.value));
    }

    function handleCheckBoxChange(e) {        
        let checkbox = e.target.id;

        if (checkbox === 'upper') {
            setIncludeUpper(!includeUpper);
        }
        if (checkbox === 'lower') {
            setIncludeLower(!includeLower);
        }
        if (checkbox === 'numbers') {
            setIncludeNumbers(!includeNumbers);
        }
        if (checkbox === 'symbols') {
            setIncludeSymbols(!includeSymbols);
        }          
    }

    function handleGenerateClick() {
        setPassword(
            generatePassword(
                charLength, 
                includeUpper, 
                includeLower, 
                includeNumbers, 
                includeSymbols
            )
        );
        setNumberOfPerms(
            calculatePermutations(
                includeUpper, 
                includeLower, 
                includeNumbers, 
                includeSymbols,
                charLength
            )
        );
        setPasswordStrength(getPasswordStrength(numberOfPerms));
        setPasswordColour(getPasswordColour(passwordStrength));
    }
    
    return (
        <>
            <Header />
            <Display 
                password={password}
            />
            <Controller 
                charLength={charLength} 
                handleSliderChange={handleSliderChange}
                includeUpper={includeUpper}
                includeLower={includeLower}
                includeNumbers={includeNumbers}
                includeSymbols={includeSymbols}
                handleCheckBoxChange={handleCheckBoxChange}
                passwordColor={passwordColour}
                passwordStrength={passwordStrength}
                handleGenerateClick={handleGenerateClick}
            />
        </>
    );
}

export default App;
