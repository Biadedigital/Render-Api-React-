import React from "react"
import DataFetcher from "./DataFetcher"

function App(props) {
   
    return (
        <div>
            <DataFetcher url="https://swapi.dev/api/people/1/">
            {({data, loading}) => {
                return (
                    loading ? <h1>"Loading..."</h1> : <p>{JSON.stringify(data)}</p>
                )
            }}

            </DataFetcher>
        </div>
    )
}

export default App