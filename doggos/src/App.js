import React from 'react';
import axios from 'axios';

class App extends React.Component {
    state = {
        dogImages: [],
        dogBreed: ""
    }

    componentDidMount() {
        axios.get("https://dog.ceo/api/breed/hound/images")
            .then((res)=>{
                console.log(res);
                this.setState({
                    dogImages: res.data.message
                })
            })
            .catch(err=>{
                console.log(err);
            });
    }

    handleChange = ()=> {
        
    }

    render() {
        return(<div>
            <h1> Search the Dogs!</h1>
            <form>
                <input onChange={handleChange} type="text"/>
                <button>Get New Dogs</button>
            </form>

            <div className="dogContainer">
                {
                    this.state.dogImages.map(image=>(
                        <img width="200" key={image} src={image}/>
                    ))
                }
            </div>
        </div>);
    }
}

export default App;