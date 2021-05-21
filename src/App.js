import React from "react";
import './App.css';
import ButtonExample from "./ButtonExample";
import FormExample from "./FormExample";
import ReactHookFormExample from "./ReactHookFormExample";


function App() {


    return (
        <div className="pageContainer">
            <ButtonExample/>
            <FormExample/>
            <ReactHookFormExample/>
        </div>
    );
}

export default App;
