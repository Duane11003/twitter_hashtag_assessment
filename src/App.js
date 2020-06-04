import React from 'react'
import ReactDOM from 'react-dom'
import HashtagSearch from './Components/HashtagSearch'

function App() {
    return (
        <div className='rootContainer'>
            <HashtagSearch />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));
