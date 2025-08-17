//App.tsx

import Title from "./components/Title"
import Form from "./components/Form"
import Results from "./components/Results"
import Loading from "./components/Loading"
import { useActionState } from "react"

const App = () => {
  const getWeather = (_prevState: any, formData: FormData) => {
    const city = formData.get("city")
    return fetch(`https://api.weatherapi.com/v1/current.json?key=317f52c768b0408ea9e113750251608&q=${city}&aqi=no`)
          .then(res => res.json())
          .then(data => data)
  }

  const [returnedData, formAction, isPending] = useActionState(getWeather, "")

  return(
    <div className="wrapper">
      <div className="container">
        <Title/>
        <Form getWeather={formAction}/>
        {isPending ? <Loading/> : <Results results={returnedData}/>}
      </div>
    </div>
  )
}

export default App