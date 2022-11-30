import Checkbox from "./Checkbox";

function Controller({ 
    charLength, 
    handleSliderChange,
    includeUpper,
    includeLower,
    includeNumbers,
    includeSymbols,
    handleCheckBoxChange,
    passwordColor,
    passwordStrength,
    handleGenerateClick
}) {

    return (    
        <div className="container p-3 mt-3">

            {/* Character Length */}
            <div className="mt-3 mb-4">Character Length
                <span className="char-length">
                    {charLength}
                </span>
            </div>
            
            {/* Slider */}
            <div className="mt-3 mb-3">
                <label htmlFor="rangeSlider" className="form-label"></label>
                <input 
                    type="range" 
                    id="rangeSlider" 
                    className="form-range" 
                    min="4" max="24" 
                    value={charLength}
                    onChange={handleSliderChange}
                />
            </div>

            {/* Checkboxes */}
            <div id="checkboxes" className="mt-3 mb-3">
                <Checkbox id={'upper'} labelText={'UpperCase Letters'} isChecked={includeUpper} handleCheckBoxChange={handleCheckBoxChange} />
                <Checkbox id={'lower'} labelText={'LowerCase Letters'} isChecked={includeLower} handleCheckBoxChange={handleCheckBoxChange} />
                <Checkbox id={'numbers'} labelText={'Numbers'} isChecked={includeNumbers} handleCheckBoxChange={handleCheckBoxChange} />
                <Checkbox id={'symbols'} labelText={'Symbols'} isChecked={includeSymbols} handleCheckBoxChange={handleCheckBoxChange} />
            </div>

            {/* Strength Bar */}
            <div className="strength p-3 mt-3 mb-3" >
                <div>Password Strength
                    <span style={{color: passwordColor}}>{passwordStrength}</span>
                </div>
            </div>

            {/* Buttons */}
            <button type="button" className="btn btn-generate" onClick={handleGenerateClick}>
                generate
            </button>
        </div>
    );
}

export default Controller;
