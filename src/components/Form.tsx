//Form.tsx

type FormProps = {
    getWeather: (payload: FormData) => void
}

const Form = (props: FormProps) => {
    return (
        <form action={props.getWeather}>
            <input type="text" 
                name="city" 
                placeholder="都市名" 
            />
            <button type="submit">
                Get Weather
            </button>
        </form>
    )
}

export default Form