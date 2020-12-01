import React from 'react';
import axios from 'axios';

class App extends React.Component {
    state = {
        dogPics:[]
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

    render() {
        return(<div>
            <h1>See some Dogs!</h1>
            <div>
                {
                    this.state.dogPics.map(dogPic => (
                        <img src={}    
                    ))
                }
            </div>
        </div>)
    }
}

export default App;