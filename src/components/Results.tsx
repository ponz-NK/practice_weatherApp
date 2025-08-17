//Result.tsx

type ResultsProps = {
    results: {
        location: {
            country: string
            name: string
        }

        current: {
            temp_c: string
            condition: {
                icon: string
                text: string
            }
        }
    }
}

const Results = (props: ResultsProps) => {
    return (
        <>
            {props.results.location?.country &&
                <>
                    <div className="results-country">{props.results.location.country}</div>
                    <div className="results-cityName">{props.results.location.name}</div>
                    <div className="results-temp">{props.results.current.temp_c}<span>°C</span></div>
                    <div className="results-condition">
                        <img src={props.results.current.condition.icon} alt="icon"/>
                        <span>{props.results.current.condition.text}</span>
                    </div>
                </>
                }
        </>
    )
}

export default Results