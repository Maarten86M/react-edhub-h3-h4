import './App.css';
import {useForm} from 'react-hook-form';

function ReactHookFormExample() {
    const {handleSubmit, errors, register, watch} = useForm({
        mode: 'onBlur',
        defaultValues: {
            'found-through': 'advertentie',
            age: 12,
            comments: "Hier heb ik alvast iets ingevuld",
        },
    });


    const selectedReferrer = watch('found-through');

    function onFormSubmit(data) {
        console.log(data);
    }

    return (
        <form className="reactform" onSubmit={handleSubmit(onFormSubmit)}>
            <fieldset>
                <legend>Gegevens</legend>

                <label htmlFor="details-name">
                    Naam:
                    <input
                        type="text"
                        id="details-name"
                        {...register("name", {
                            required: true,
                            validate: (value) => value.includes('@'),
                        })}
                    />
                </label>


                <label htmlFor="details-age">
                    Leeftijd:
                    <input
                        type="number"
                        id="details-age"
                        {...register("age")}
                    />
                </label>
            </fieldset>

            <fieldset>
                <legend>Jouw review</legend>

                <label htmlFor="referrer">
                    Hoe heb je dit recept gevonden?
                    <select
                        id="referrer"
                        {...register("found-through")}
                    >
                        <option value="google">Google</option>
                        <option value="vriend">Vriend</option>
                        <option value="advertentie">Advertentie</option>
                        <option value="anders">Anders</option>
                    </select>
                </label>
                {selectedReferrer === 'anders' && (
                    <input
                        type="text"
                        {...register("found-through-anders", {required: true})}
                    />
                )}


                <label htmlFor="recipe-comments">
                    Opmerkingen:
                    <textarea
                        id="recipe-comments"
                        rows="4"
                        cols="40"
                        placeholder="Wat vond je van het recept?"
                        {...register("comments", {
                            required: {
                                value: true,
                                message: 'Dit veld mag niet leeg zijn',
                            },
                            maxLength: {
                                value: 50,
                                message: 'Er mogen maximaal 50 karakters gebruikt worden',
                            },
                        })}
                    >
                </textarea>
                </label>


                <button type="submit">
                    Versturen
                </button>
            </fieldset>
        </form>
    )
};
export default ReactHookFormExample;