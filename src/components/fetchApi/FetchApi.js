

const FetchApi = ( url, method, headers ={}, body={}) => {
    return new Promise((resolve, reject) => {
       if(method === 'GET'){
    
        fetch(url)
        .then(response => response.json())
        .then(data => {
            resolve(data) 
        })
        .catch(error => {
            reject(error)
            console.log('Network Error', error)
        })
     }else{
           fetch(url, {method, headers, body:JSON.stringify(body)})
           .then(response => response.json())
           .then(data => {
            resolve(data)
            
           })
           .catch(error => {
            reject(error)
            console.log('Network Error', error)
           })
    } 
    })
    
}

export default FetchApi