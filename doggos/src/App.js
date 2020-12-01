import React from 'react';
import fetchDogs from './services/fetchDogs';

class App extends React.Component {
    state = {
        dogPics:[],
        input: "husky"
    }

    componentDidMount() {
        fetchDogs("husky")
            .then((resp)=>{
                this.setState({
                    dogPics:resp.data.message
                });
            });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.dogPics !== this.state.dogPics) {
            if (this.state.input === 'chihuahua') {
                fetchDogs("husky")
                    .then((resp)=>{
                        this.setState({
                            dogPics:resp.data.message
                        });
                    });
            }
        }
    }

    onChange = (e) => {
        this.setState({
            input:e.target.value
        });
    } 

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.input);
        fetchDogs(this.state.input)
            .then(resp=>{
                this.setState({
                    dogPics: resp.data.message
                })
            });
    }

    render() {
        return(<div>
            <h1>See some Dogs!</h1>

            <form onSubmit={this.onSubmit}>
                <label>
                    Search for a breed:
                    <input 
                        value={this.state.input}
                        placeholder='enter a breed'
                        onChange={this.onChange}
                    />
                </label>
                <button>Search</button>
            </form>

            <div>
                {
                    this.state.dogPics.map(dogPic => (
                          <img width="200" src={dogPic} alt={dogPic} key={dogPic} />
                    ))
                }
            </div>
        </div>)
    }
}

export default App;