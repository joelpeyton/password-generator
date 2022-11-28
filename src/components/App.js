import Header from "./Header";
import Display from "./Display";
import Controller from "./Controller";
import { useState } from "react";

function App() {
    const [charLength, setCharLength] = useState(10);
    
    return (
        <>
        <Header />
        <Display charLength={charLength} />
        <Controller charLength={charLength} handleChange={(e) => setCharLength(e.target.value)}/>
        </>
    );
}

export default App;
