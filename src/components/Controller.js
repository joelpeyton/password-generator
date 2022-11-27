function Controller() {
  return (    
        <div className="container p-3 mt-3">

            {/* Character Length */}
            <div className="mt-3 mb-3">Character Length<span style={{float: 'right'}}>10</span></div>
            
            {/* Slider */}
            <div className="mt-3 mb-3">
                <input type="range" id="rangeSlider" className="" min="1" max="48" value="24" />
            </div>

            {/* Checkboxes */}
            <div id="checkboxes" className="mt-3 mb-3">
                <div className="custom-control custom-checkbox custom-control-inline">
                    <input type="checkbox" className="custom-control-input" id="letters" checked />
                    <label className="custom-control-label" for="letters">Include Uppercase Letters</label>
                </div>
                <div className="custom-control custom-checkbox custom-control-inline">
                    <input type="checkbox" className="custom-control-input" id="mixed" checked />
                    <label className="custom-control-label" for="mixed">Include Lowercase Letters</label>
                </div>
                <div className="custom-control custom-checkbox custom-control-inline">
                    <input type="checkbox" className="custom-control-input" id="punctuation" checked />
                    <label className="custom-control-label" for="punctuation">Include Numbers</label>
                </div>
                <div className="custom-control custom-checkbox custom-control-inline">
                    <input type="checkbox" className="custom-control-input" id="numbers" checked />
                    <label className="custom-control-label" for="numbers">Include Symbols</label>
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
