// let result = fetch("http://localhost:3000/users")
// console.log(result);

// fetch("http://localhost:3000/users")
// .then(response=>{
//     console.log(response);
//     response.json().then(result=>{
//         console.log(result);
//     })
// }).catch(err=>{
//     console.log(err);
    
// })


// fetch("http://localhost:3000/users")
// .then(response=>{
//     return response.json()
// }).then(result=>{
//     console.log(result);
// }).catch(err=>{
//     console.log(err.name);
//     console.log(err.message);
// })


//checking its status and statustext
// fetch("http://localhost:3000/users")
// .then(response=>{
//     if(!response.ok){
//         throw new Error(response.status+" "+response.statusText)
//     }
//     return response.json()
// }).then(result=>{
//     console.log(result);
// }).catch(err=>{
//     console.log(err.name);
//     console.log(err.message);
// })

//here now using the 2 arguments (endpoint,config())
// let users={
//     "name":"harika",
//     "email":"harika@gmail.com",
//     "phone":9876543211
// }

// fetch("http://localhost:3000/users",{
//     method:"POST",
//     body:JSON.stringify(users),
//     headers:{
//         "content-type":"application/json"
//     }
// })
// .then(response=>{
//     if(!response.ok){
//         throw new Error(response.status+" "+response.statusText)
//     }
//     return response.json()
// }).then(result=>{
//     console.log(result);
// }).catch(err=>{
//     console.log(err.name);
//     console.log(err.message);
// })

// same thing in anotherway
// let users={
//     "name":"swapna",
//     "email":"swap@gmail.com",
//     "phone":9876543345
// }
// let url = "http://localhost:3000/users"

// let header = new Headers()
// headers.append("content-type","application/json")

// let config = {
//      method:"POST",
//     body:JSON.stringify(users),
//     headers:headers
// }

// let request = new Request(url,config)

// fetch(request)
// .then(response=>{
//     if(!response.ok){
//         throw new Error(response.status+" "+response.statusText)
//     }
//     return response.json()
// }).then(result=>{
//     console.log(result);
// }).catch(err=>{
//     console.log(err.name);
//     console.log(err.message);
// })

//adding users by using functions
function addusers(){
    let url = "http://localhost:3000/users"
    let user = {"name":"lik","email":"lik@gmail.com"}
    fetch(url,{
        method:"POST",
        body:JSON.stringify(user)
    }).then(response=>{
        if(!response.ok){
            throw new Error(response.status+" "+response.statusText)
        }
        return response.json()
    }).then(result=>{
        console.log(result);
    }).catch(err=>{
        console.log(err);
    })
}
// addusers()


function getuser(){
    let url = "http://localhost:3000/users/1";

    fetch(url)   
      .then(response => {
          if (!response.ok) {
              throw new Error(response.status + " " + response.statusText);
          }
          return response.json();
      })
      .then(result => {
          console.log(result);
      })
      .catch(err => {
          console.log(err);
      });
}

// getuser();

function user(){
    let url = "http://localhost:3000/users/80ba";

    let headers = new Headers();
    headers.append("Content-Type", "application/json");

    let config = {
        method: "GET",
        headers: headers
    };

    let request = new Request(url, config);

    fetch(request)
      .then(response => {
          if (!response.ok) {
              throw new Error(response.status + " " + response.statusText);
          }
          return response.json();
      })
      .then(result => {
          console.log(result);
      })
      .catch(err => {
          console.log(err.name);
          console.log(err.message);
      });
}

// user();

function modifyuser(){
    let url = "http://localhost:3000/users/80ba";
    let user = {"name":"harika adapa","email":"harka@gmail.com"}
    fetch(url,{
        method:"PATCH",
        body:JSON.stringify(user)
    }).then(response => {
          if (!response.ok) {
              throw new Error(response.status + " " + response.statusText);
          }
          return response.json();
      })
      .then(result => {
          console.log(result);
      })
      .catch(err => {
          console.log(err.name);
          console.log(err.message);
      })
}
// modifyuser()

function replaceuser(){
    let url = "http://localhost:3000/users/b675";
    let user = {"name":"srinivas adapa","email":"srinua@gmail.com"}
    fetch(url,{
        method:"PUT",
        body:JSON.stringify(user)
    }).then(response => {
          if (!response.ok) {
              throw new Error(response.status + " " + response.statusText);
          }
          return response.json();
      })
      .then(result => {
          console.log(result);
      })
      .catch(err => {
          console.log(err.name);
          console.log(err.message);
      })
}
replaceuser()

function deleteuser(){
    fetch("http://localhost:3000/users/80ba",{
        method : "DELETE"
    }).then(response => {
          if (!response.ok) {
              throw new Error(response.status + " " + response.statusText);
          }
          return response.json();
      })
      .then(result => {
          console.log(result);
      })
      .catch(err => {
          console.log(err.name);
          console.log(err.message);
      })
}
// deleteuser()