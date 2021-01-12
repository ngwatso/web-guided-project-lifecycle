import React from 'react';

class App extends React.Component {
    render() {
        const dogs = ["https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg", "https://images.dog.ceo/breeds/hound-afghan/n02088094_1007.jpg"];
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