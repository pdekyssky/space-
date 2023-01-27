import { useState, useEffect } from "react"
import "./App.css"

const App = () => {

    //api
    const url = "http://api.open-notify.org/iss-now.json"
    
    let [latitude, setLatitude] = useState("")
    let [longitude, setLongitude] = useState("")
   
    const getCoordinates = async() => {
        const response = await fetch(url) 
        const data = await response.json()
       
        console.log(data["iss_position"]["latitude"]);
        console.log(data["iss_position"]["longitude"]);
       
        setLatitude(data["iss_position"]["latitude"]) 
        setLongitude(data["iss_position"]["longitude"])
    }

    const handleClick = () => {
         //useEffect( () => {
            getCoordinates()
    //    }, [])
    }
    
    

    //api
    return (
        <div>
        <h1>Medzinarodna vesmirna stanica poloha</h1>
            <h2>Zemepisna sirka</h2>
            <p>{latitude}</p>
            <h2>Zemepisna dlzka</h2>
            <p>{longitude}</p>
            <button onClick={handleClick}>New Cords</button>
        </div>
    )
}

export default App