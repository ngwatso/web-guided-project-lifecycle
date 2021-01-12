import React from 'react';
import axios from 'axios';

class App extends React.Component {
    state = {
        dogImages: []
    }

    componentDidMount() {
        axios.get("https://dog.ceo/api/breed/hound/images")
            .then((res)=>{
                console.log(res);
                this.setState({
                    dogImages: res
                })
            })
            .catch(err=>{
                console.log(err);
            });
    }

    render() {
        console.log(this.state.dogImages);
        
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