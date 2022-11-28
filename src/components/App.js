import Header from "./Header";
import Display from "./Display";
import Controller from "./Controller";
import { useState } from "react";

function App() {
    const [charLength, setCharLength] = useState(16);
    const [includeUpper, setIncludeUpper] = useState(true);
    const [includeLower, setIncludeLower] = useState(true);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSymbols, setIncludeSymbols] = useState(true);

    function handleCheckBoxChange(e) {
        let checkbox = e.target.id;

        if (checkbox === 'upper') {
            includeUpper ? setIncludeUpper(false) : setIncludeUpper(true);
        }
        if (checkbox === 'lower') {
            includeLower ? setIncludeLower(false) : setIncludeLower(true);
        }
        if (checkbox === 'numbers') {
            includeNumbers ? setIncludeNumbers(false) : setIncludeNumbers(true);
        }
        if (checkbox === 'symbols') {
            includeSymbols ? setIncludeSymbols(false) : setIncludeSymbols(true);
        }       
    }
    
    return (
        <>
            <Header />
            <Display 
                charLength={charLength} 
                includeUpper={includeUpper}
                includeLower={includeLower}
                includeNumbers={includeNumbers}
                includeSymbols={includeSymbols}
            />
            <Controller 
                charLength={charLength} 
                handleSliderChange={(e) => setCharLength(e.target.value)}
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
