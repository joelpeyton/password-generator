import { useState } from 'react';

function Display({ password }) {  
    const [isVisible, setIsVisible] = useState('hidden');

    function handleCopyClick()  {
        navigator.clipboard.writeText(password).then(function() {
            setIsVisible('');
            setTimeout(function() {
                setIsVisible('hidden');
            }, 500);
        });
    }

    return (
        <>
            <div className="container p-3">
                <div className="display">
                    {password}
                    <i className="bi bi-clipboard" onClick={handleCopyClick}></i>
                </div>
            </div>

            <div className="copied" style={{visibility: isVisible}}>
                <p>COPIED!</p>
            </div>
        </>
    );
}

export default Display;
