function Checkbox({ id, labelText, isChecked, handleCheckBoxChange }) {  
    return (
        <div className="form-check">
            <input 
                className="form-check-input" 
                type="checkbox" 
                id={id}
                checked={isChecked} 
                onChange={handleCheckBoxChange}
            />
            <label className="form-check-label ps-3" htmlFor={id}>
                Include {labelText}
            </label>
        </div>
    );
}

export default Checkbox;
