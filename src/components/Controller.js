function Controller() {
  return (    
        <div className="container p-3 mt-3">

            {/* Character Length */}
            <div className="mt-3 mb-3">Character Length<span className="char-length">10</span></div>
            
            {/* Slider */}
            <div className="mt-3 mb-3">
                <label htmlFor="rangeSlider" className="form-label"></label>
                <input type="range" id="rangeSlider" className="form-range" min="1" max="48" />
            </div>

            {/* Checkboxes */}
            <div id="checkboxes" className="mt-3 mb-3">
                <div className="custom-control custom-checkbox custom-control-inline">
                    <input type="checkbox" className="custom-control-input" id="letters" />
                    <label className="custom-control-label" htmlFor="letters">Include Uppercase Letters</label>
                </div>
                <div className="custom-control custom-checkbox custom-control-inline">
                    <input type="checkbox" className="custom-control-input" id="mixed" />
                    <label className="custom-control-label" htmlFor="mixed">Include Lowercase Letters</label>
                </div>
                <div className="custom-control custom-checkbox custom-control-inline">
                    <input type="checkbox" className="custom-control-input" id="punctuation" />
                    <label className="custom-control-label" htmlFor="punctuation">Include Numbers</label>
                </div>
                <div className="custom-control custom-checkbox custom-control-inline">
                    <input type="checkbox" className="custom-control-input" id="numbers" />
                    <label className="custom-control-label" htmlFor="numbers">Include Symbols</label>
                </div>
            </div>

            {/* Strength Bar */}
            <div className="strength p-3 mt-3 mb-3">
                <div>STRENGTH BAR </div>
            </div>

            {/* Generate Button */}
            <button type="button" className="btn btn-primary">
                Generate
            </button>
        </div>
    );
}

export default Controller;
