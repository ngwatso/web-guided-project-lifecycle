import React from 'react';

class App extends React.Component {
    render() {
        const dogs = [{name: "name1"}, {name: "name2"}];
        return(<div>
            <h1> Search the Dogs!</h1>
            <div className="dogContainer">
                {
                    dogs.map(dog=>(
                    <h2>{dog.name}</h2>)
                    )
                }
            </div>
        </div>);
    }
}

export default App;