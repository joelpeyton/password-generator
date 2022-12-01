import Header from "./Header";
import Display from "./Display";
import Controller from "./Controller";
import { useState } from "react";
import generatePassword from "../js/generatePassword";

function App() {
    const [charLength, setCharLength] = useState(16);
    const [includeUpper, setIncludeUpper] = useState(true);
    const [includeLower, setIncludeLower] = useState(true);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSymbols, setIncludeSymbols] = useState(true);
    let password = generatePassword(charLength, includeUpper, includeLower, includeNumbers, includeSymbols);

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
    
    if (!includeUpper && !includeLower && !includeNumbers && !includeSymbols) {setIncludeLower(true)}
    
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
            />
        </>
    );
}

export default App;
