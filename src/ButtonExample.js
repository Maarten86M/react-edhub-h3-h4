import React from "react";
import './App.css';

function ButtonExample() {

    const [color, setColor] = React.useState("Nog niets geselecteerd");
    const [count, setCount] = React.useState(0);

    return (
        <>
            <h2>Welke kleur is er aangeklikt: {color} {count}</h2>
            <button
                type="button"
                className="purple"
                onClick={() => setColor("Paars")}
            > Paars
            </button>
            <button
                type="button"
                className="red"
                onClick={() => setColor("Rood")}
            > Rood
            </button>
            <button
                type="button"
                className="pink"
                onClick={() => setColor("Roze")}
            > Roze
            </button>
            <button
                type="button"
                className="count"
                onClick={() => setCount(count => count + 1)}
            > Count +
            </button>
            <button
                type="button"
                className="clearcount"
                onClick={() => setCount(count => count - 1)}
            >Minus Count -
            </button>
        </>
    )
}

export default ButtonExample;