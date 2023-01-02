import React, {useState, useEffect} from "react"
import axios from "axios"

const App = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    axios
      .get("/api/events/")
      .then(response => {
        setData(response.data.data)
      })
  }, [])

  const convertDate = (date) => {
    const options = {year: "numeric", month: "numeric", day: "numeric", hour: "numeric", minute: "numeric"}
    const convertedDate = new Date(date).toLocaleDateString("fi-FI", options)
    return convertedDate
  }

  return (
    <div>
      <h1>keikat</h1>
      <ul>
      {data && data.map((gig, index) => <><li key={index}>{convertDate(gig.event_dates.starting_day)} <b><a href={gig.info_url} target="blank">{gig.name.fi}</a></b></li>
        {gig.description.intro}</>
       )}
      </ul>
    </div>
  );
}

export default App;
