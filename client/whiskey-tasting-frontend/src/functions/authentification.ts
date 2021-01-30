
const loginRoutine = credentials => new Promise ((resolve, reject) => {
    fetch("http://localhost:3000/login",{
        method: 'POST',
        body: JSON.stringify(credentials)
    })
    .then(function(response){
        const result = JSON.parse(response);
        const token:string = result.data.token;
        const id: number = result.data.userId;
        localStorage.setItem('user-token', token);
        localStorage.setItem('user-id', id.toString());
        resolve(result);
    })
    .catch(function(error){
        localStorage.removeItem('user-token');
        localStorage.removeItem('user-id');
        reject(error);
    })
})
