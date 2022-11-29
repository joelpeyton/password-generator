function Controller({ 
    charLength, 
    handleSliderChange,
    includeUpper,
    includeLower,
    includeNumbers,
    includeSymbols,
    handleCheckBoxChange,
    passwordColor,
    passwordStrength
}) {

    return (    
        <div className="container p-3 mt-3">

            {/* Character Length */}
            <div className="mt-3 mb-4">Character Length<span className="char-length">{charLength}</span></div>
            
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
                <div className="form-check">
                    <input 
                        className="form-check-input" 
                        type="checkbox" 
                        id="upper" 
                        checked={includeUpper} 
                        onChange={handleCheckBoxChange}
                    />
                    <label className="form-check-label ps-3" htmlFor="upper">
                        Include Uppercase Letters
                    </label>
                </div>
                <div className="form-check">
                    <input 
                        className="form-check-input" 
                        type="checkbox"  
                        id="lower"
                        checked={includeLower} 
                        onChange={handleCheckBoxChange}
                    />
                    <label className="form-check-label ps-3" htmlFor="lower">
                        Include Lowercase Letters
                    </label>
                </div>
                <div className="form-check">
                    <input 
                        className="form-check-input" 
                        type="checkbox" 
                        id="numbers" 
                        checked={includeNumbers} 
                        onChange={handleCheckBoxChange}
                    />
                    <label className="form-check-label ps-3" htmlFor="numbers">
                        Include Numbers
                    </label>
                </div>
                <div className="form-check">
                    <input 
                        className="form-check-input" 
                        type="checkbox" 
                        id="symbols" 
                        checked={includeSymbols} 
                        onChange={handleCheckBoxChange}
                    />
                    <label className="form-check-label ps-3" htmlFor="symbols">
                        Include Symbols
                    </label>
                </div>
            </div>

            {/* Strength Bar */}
            <div className="strength p-3 mt-3 mb-3" >
                <div>Password Strength
                    <span style={{color: passwordColor}}>{passwordStrength}</span>
                </div>
            </div>

            {/* Buttons */}
            <button type="button" className="btn btn-buttons">
                <i class="bi bi-arrow-clockwise"></i>
            </button>
            <button type="button" className="btn btn-buttons">
                <i className="bi bi-clipboard"></i>
            </button>
        </div>
    );
}

export default Controller;
