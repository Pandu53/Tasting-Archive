
const loginRoutine = credentials => new Promise ((resolve, reject) => {
    fetch("http://localhost:3000/login",{
        method: 'POST',
        body: JSON.stringify(credentials)
    })
    .then(function(response){
        const token:string = response.data.token;
        localStorage.setItem('user-token', token);
        resolve(response);
    })
    .catch(function(error){
        localStorage.removeItem('user-token')
        reject(error);
    })
})

const logoutRoutine = credentials => ((resolve, reject)=> {
    
})