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
                handleSliderChange={(e) => setCharLength(parseInt(e.target.value))}
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
