import React from "react";
import './App.css';

function FormExample (){

    const [nameinputValue, setnameinputValue] = React.useState('');
    const [termsAndConditionsValue, toggleCheckedTerms] = React.useState(false);
    const [submitted, setSubmitted] = React.useState(false);
    const [howfindus, setHowfindus] = React.useState(false);

    function sendForm(e) {
        e.preventDefault();
        console.log("Dit is er ingegevern","naam:", nameinputValue,"terms:", termsAndConditionsValue,"formulier verzonden:", submitted,"Hoe ons gevonden?:", howfindus);
        setSubmitted(true);
    }

   return (
       <>
           <div className="inputfieldContainer">
               <form action="">

                   <h2>Uw naam is: {nameinputValue}</h2>
                   <label htmlFor="yourname">Voer uw naam in </label>
                   <input
                       type="text"
                       placeholder="Typ hier uw naam"
                       className={nameinputValue.length > 10 ? 'input-error' : ''}
                       name="name"
                       value={nameinputValue}
                       onChange={(e) => setnameinputValue(e.target.value)}
                   />
                   {nameinputValue.length > 10 && <p className="error-message"> Uw naam is te lang!</p>}


                   <label className="checkContainer" htmlFor="form-terms-and-conditions">
                       <input
                           type="checkbox"
                           id="form-terms-and-conditions"
                           name="terms-and-conditions"
                           checked={termsAndConditionsValue}
                           onChange={() => toggleCheckedTerms(!termsAndConditionsValue)}
                       /> Gaat u akkoord?
                   </label>

                   <fieldset>
                       <legend>Hoe heb je ons gevonden?</legend>
                       <label htmlFor="findUs">Selecteer het antwoord:</label>
                       <select
                           name="selectusbox"
                           id="findUs"
                           value={howfindus}
                           onChange={(e) => setHowfindus(e.target.value)} >
                           <option value="anders">Anders</option>
                           <option value="Google">Google</option>
                           <option value="Vriend">Vriend</option>
                           <option value="Advertentie">Advertentie</option>
                       </select>


                   </fieldset>


               </form>
               <button
                   disabled={!termsAndConditionsValue}
                   type="submit"
                   onClick={sendForm}
               >Verzend uw naam
               </button>
           </div>
       </>
   )
}

export default FormExample;