
export default function Weather(props) {
    return ( 
      props.weather.map((day, index) => (
        <div key={index}>
          <h2>Date: {day.date}</h2>
          <h3>Description: {day.description}</h3>
        </div>
      ))
    )
}  
