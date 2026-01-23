// using async method
async function adduser(){
    let url = "http://localhost:3000/users"
    let user = {"name":"harika","email":"harka@gmail.com","phone":9876543210}
    let response = await fetch(url,{
        method :"POST",
        body : JSON.stringify(user)
    })
    let result = await response.json()
    console.log(result);

}
adduser()

// with try catch exceptions
async function adduser(){
    try{                       
    let url = "http://localhost:3000/users                                                   "
    let user = {"name":"harika","email":"harka@gmail.com","phone":9876543210}
    let response = await fetch(url,{
        method :"POST",
        body : JSON.stringify(user)
    })
    if(!response.ok){
        throw new Error(response.status+" "+response.statusText)
    }
    let result = await response.json()
    console.log(result);
    }catch(error){
        console.log(error.message);
    }
}
// adduser()

async function getusers(){
    try{                       
        let url = "http://localhost:3000/users                                                   "
        let response = await fetch(url)
        if(!response.ok){
            throw new Error(response.status+" "+response.statusText)
        }
        let result = await response.json()
        console.log(result);
    }catch(error){
        console.log(error.message);
    }
}
getusers()

async function getuser() {
  try {
    let url = "http://localhost:3000/users/b675"; 

    let response = await fetch(url);

    if (!response.ok) {
      throw new Error(response.status + " " + response.statusText);
    }

    let result = await response.json();
    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
}

// getuser();
