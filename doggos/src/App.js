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
    
    componentDidUpdate(prevProps, prevState) {
        if(prevState.dogImages !== this.state.dogImages){
            if (this.state.dogBreed === "chihuahua") {
                console.log("DONT WANT chihuahuass!!!");
            }
        }
    }

    handleChange = e => {
        this.setState({
            dogBreed: e.target.value
        });
    }

    handleClick = e => {
        e.preventDefault();
        axios.get(`https://dog.ceo/api/breed/${this.state.dogBreed}/images`)
            .then(res=>{
                this.setState({
                    dogImages: res.data.message
                });
            })
    }

    render() {
        return(<div>
            <h1> Search the Dogs!</h1>
            <form>
                <input onChange={this.handleChange} type="text"/>
                <button onClick={this.handleClick}>Get New Dogs</button>
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