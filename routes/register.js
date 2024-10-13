import axios from 'axios';

axios.post('/register', {
    username: 'username',
    password: 'password'
})
.then(response => {
    console.log(response.data);
})
.catch(error => {
    console.error(error);
});
