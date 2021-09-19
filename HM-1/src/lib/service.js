import axios from 'axios';

const getData = async(uID) => {
    const baseUrl = "https://jsonplaceholder.typicode.com/users/1](https://jsonplaceholder.typicode.com/users";
    await axios(`${baseUrl}/uid`)
    .then((response) => {
        console.log(response.data);
    });
}

export default getData;