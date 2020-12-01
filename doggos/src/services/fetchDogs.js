import axios from 'axios';

const fetchDogs = (breed) => {
    return axios.get(`https://dog.ceo/api/breed/${breed}/images`)
        .then((resp)=> {
            return (resp);
        })
        .catch(err=> console.log(err));
}

export default fetchDogs;