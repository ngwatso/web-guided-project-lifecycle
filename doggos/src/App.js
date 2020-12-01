import React from 'react';
import axios from 'axios';

class App extends React.Component {
    state = {
        dogPics:[],
        input: "husky"
    }

    componentDidMount() {
        axios.get('https://dog.ceo/api/breed/husky/images')
            .then((resp)=> {
                console.log(resp);
                this.setState({
                    dogPics: resp.data.message
                });
            })
            .catch(err=> console.log(err));
    }

    onChange = (e) => {
        this.setState({
            input:e.target.value
        });
    } 

    onSubmit = (e) => {
        e.preventDefault();

    }

    render() {
        //1. Add in a form for search
        //2. Add to search term to state.
        //3. Add Change flow to input.
        //4. Add Submit flow
        return(<div>
            <h1>See some Dogs!</h1>

            <form >
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