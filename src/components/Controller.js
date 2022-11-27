function Controller() {
    return (    
        <div className="container p-3 mt-3">

            {/* Character Length */}
            <div className="mt-3 mb-4">Character Length<span className="char-length">10</span></div>
            
            {/* Slider */}
            <div className="mt-3 mb-3">
                <label htmlFor="rangeSlider" className="form-label"></label>
                <input type="range" id="rangeSlider" className="form-range" min="1" max="48" />
            </div>

            {/* Checkboxes */}
            <div id="checkboxes" className="mt-3 mb-3">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="uppercase" />
                    <label className="form-check-label ps-3" htmlFor="uppercase">
                        Include Uppercase Letters
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="lowercase" />
                    <label className="form-check-label ps-3" htmlFor="lowercase">
                        Include Lowercase Letters
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="numbers" />
                    <label className="form-check-label ps-3" htmlFor="numbers">
                        Include Numbers
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="symbols" />
                    <label className="form-check-label ps-3" htmlFor="symbols">
                        Include Symbols
                    </label>
                </div>
            </div>

            {/* Strength Bar */}
            <div className="strength p-3 mt-3 mb-3">
                <div>Password Strength<span>WEAK</span></div>
            </div>

            {/* Generate Button */}
            <button type="button" className="btn btn-generate">
                generate
            </button>
        </div>
    );
}

export default Controller;
