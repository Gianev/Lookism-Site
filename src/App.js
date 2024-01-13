import { useState, useEffect } from "react"
import "./Components/styles.css"
import Look from "./Components/lookingAt.js"
import Data from "./Components/Data"
import Card from "./Components/Card"

function App() {

  

  const getFilteredItems = (query, items) => {
    if (!query) {
      return items
    }
    return items.filter(person => person.name.includes(query))
  }


  const [query, setQuery] = useState("")

  const filteredItems = getFilteredItems(query, Data)

  useEffect(() =>{
    console.log(query)
  }, [filteredItems])


  const charCards = filteredItems.map((data) =>{
    return(
    <Card
      props={data}
    ></Card>

    )
  })
  


  return (
    <div>
      <div className='lookinAt'>
          <h1 className='text2'>LOOKISM</h1>
        <div className="searchbar">
          <h3 className='text'>You are looking at:</h3>
          <input type="text" onChange={(e)=>setQuery(e.target.value)}></input>
        </div>
      </div>

      <div className="grid">{charCards}</div>
    </div>

  );
}

export default App;
