import React from 'react';

class App extends React.Component {
    state = {
        dogImages: ["https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg"]
    }

    render() {
        return(<div>
            <h1> Search the Dogs!</h1>
            <div className="dogContainer">
                {
                    this.state.dogImages.map(image=>(
                        <img src={image}/>
                    ))
                }
            </div>
        </div>);
    }
}

export default App;