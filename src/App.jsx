import { useState, useEffect } from "react"
import "./App.css"

/*const App = () => {

    //api
    const url = "http://api.open-notify.org/iss-now.json"
    
    const [latitude, setLatitude] = useState("")
    const [longitude, setLongitude] = useState("")
    const [mapUrl, setMapUrl] = useState("")
   
    const getCoordinates = async() => {
        const response = await fetch(url) 
        const data = await response.json()
       
        console.log(data["iss_position"]["latitude"]);
        console.log(data["iss_position"]["longitude"]);
       
        setLatitude(data["iss_position"]["latitude"]) 
        setLongitude(data["iss_position"]["longitude"])

        const iss_long = data["iss_position"]["longitude"]
        const iss_lat = data["iss_position"]["latitude"]

        setMapUrl(`https://sk.mapy.cz/zakladni?x=${iss_long}&y=${iss_lat}&z=8`)
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
            <p>najskor klikni na new cords</p>
            <a href={mapUrl} target="_blank">Pozicia ISS v mapach</a>
        </div>
    )
}

export default App*/


const url = "http://api.open-notify.org/iss-now.json"

const App = () => {

    const [loading, setLoading] = useState(true)
    const [latitude, setLatitude] = useState("")
    const [longitude, setLongitude] = useState("")

    useEffect( () => {
        fetch(url)
            .then( (response) => response.json() )
            .then( (data) => data["iss_position"])
            .then( (position) => {
                
                console.log(position["latitude"]);
                console.log(position["longitude"]);
                
                setLatitude(position["latitude"])
                setLongitude(position["longitude"])
            })
            setLoading(false)
    }, [] )

    if (loading) {
        return <h2>Loading</h2>
    } 
        return (
            <div>
                <h2>Zemepisna sirka</h2>
                <p>{latitude}</p>
                <h2>Zemepisna dlzka</h2>
                <p>{longitude}</p>
            </div>
        )
    
}

export default App