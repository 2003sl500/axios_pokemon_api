import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Pokemon = (props) => {

    const [state, setState] = useState(0)
    const [isClicked, setIsClicked] = useState("false")

    useEffect(() => {
        console.log("useEffect function")
        if(isClicked === "true"){
            console.log("button was clicked, isClicked: ", isClicked)
            axios.get('https://pokeapi.co/api/v2/pokemon/?limit=1200')
            .then(res => {
                setState({
                    people: res.data.results
                })
            })
        } else {
            console.log("button not clicked")
        }
    }, [isClicked])

    const fetchData = () => {
        setIsClicked("true") 
    }
    console.log("fetchData: ", isClicked)

    return (
        <div>
            <button onClick={fetchData}>Fetch Pokemon</button>
            {
                state.people ? state.people.map((item, index) => {
                    return(<div key={index}>{item.name}</div>)
                }):null
            }
        </div>
    )
}

export default Pokemon
