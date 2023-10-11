fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response =>{
 console.log('response')
})
.catch(error =>{
               console.error('ERROR',error)
})