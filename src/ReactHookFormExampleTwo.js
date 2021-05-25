import {useForm} from 'react-hook-form';

function ReactHookFormExampleTwo() {
    const { handleSubmit, formState: { errors }, register, watch } = useForm({
        // mode: 'onBlur',
    });
    const selectedReferrer = watch('found-through');

    function onFormSubmit(data) {
        console.log(data)
        console.log(data.name)
        ;
    }



    return (
        <>
            <h1>Je naam is:   </h1>
            <form onSubmit={handleSubmit(onFormSubmit)}>
                <fieldset>
                    <legend>Gegevens</legend>

                    <label htmlFor="details-name">
                    Naam:
                    <input
                        type="text"
                        id="details-name"
                        {...register("name", {
                            required: {
                                value: true,
                            message: "Dit veld mag niet leeg zijn"},

                        })}
                    />
                        {errors.name && <p>{errors.name.message}</p>}
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
                            {...register("found-through-anders", { required: true })}
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
                        {errors.comments && <p>{errors.comments.message}</p>}
                    </label>



                    <button type="submit">
                        Versturen
                    </button>
                </fieldset>
            </form>

        </>
    )
}

export default ReactHookFormExampleTwo;