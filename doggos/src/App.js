import React from 'react';

class App extends React.Component {
    render() {
        const dogs = ["", ""];
        return(<div>
            <h1> Search the Dogs!</h1>
            <div className="dogContainer">
                {
                    dogs.map(dogImage=>(
                        <img src={dogImage}/>
                    ))
                }
            </div>
        </div>);
    }
}

export default App;