import axios from "axios";

// axios.get("http://localhost:3000/users")
// .then(response=>{
//     console.log(response);
// }).catch(error=>{
//     console.log(error.name);
//     console.log(error.message);
// })


// using post 
// let user = {
//   name: "swapna",
//   email: "swap@gmail.com",
//   phone: 9876443345
// };

// let url = "http://localhost:3000/users";

// axios.post(url, user)
//   .then(response => {
//     console.log(response.data);  
//   })
//   .catch(err => {
//     console.log(err.name);
//     console.log(err.message);
//   });
// 

// using header
// let user = {
//     name : "srinu",
//     email : "srinu@gmail.com",
//     phone : 6543217890
// }
// let url = "http://localhost:3000/users"

// axios(url,{
//     method:"POST",
//     data: user,
//     header : {
//         "content-type":"application/json"
//     }
// }).then(response=>{
//     console.log(response.data);
// }).catch(error=>{
//     console.log(error.name);
//     console.log(error.meassage);
// })

//using function to adduser()
// adduser() 
// function adduser(){
//     let user ={
//         name : "rithwik",
//         email : "rith@gmail.com",
//         phone : 6654576874
//     }
//     let url ="http://localhost:3000/users"
//     axios.post(url,user)
//     .then(response=>{
//         console.log(response.data);
//     }).catch(error=>{
//         console.log(error.name);
//         console.log(error.message);
//     })
// }
// adduser()

//same with async functn
// async function adduser(){
//     let url = "http://localhost:3000/users"
//     let user = {name : "lik",email:"lik@gmail.com",phone :9876543210}
//     try{
//         let response = await axios.post(url, user)
//         console.log(response.data);
//     }catch(error){
//         console.log(error);
//     }
// }
// adduser()
 
//getuser
// function getusers(){
//     let url = "http://localhost:3000/users"
//     axios.get(url)
//     .then(response=>{
//         console.log(response.data)
//     }).catch(err=>{
//         console.log(err.name);
//         console.log(err.message);
//     })
// }
// getusers()

//modifyuser(),patch
// function modifyuser(){
//     let url = "http://localhost:3000/users/5937"
//     let user = {
//         name : "rishi",
//         email : "rish@gmail.com"
//     }
//     axios.patch(url,user)
//     .then(response=>{
//         console.log(response.data);
//     }).catch(error=>{
//         console.log(error.name);
//         console.log(error.message);
//     })
// }
// modifyuser()

//replaceuser(),put
function replaceuser(){
    let url = "http://localhost:3000/users/5937"
    let user = {
        name : "ram",
        email : "ram@gmail.com"
    }
    axios.put(url,user)
    .then(response=>{
        console.log(response.data);
    }).catch(error=>{
        console.log(error.name);
        console.log(error.message);
    })
}
replaceuser()

// deleting user
// function deleteuser(){
//     let url = "http://localhost:3000/users/1469"
//     axios.delete(url)
//     .then(response=>{
//         console.log(response.data);
//     }).catch(error=>{
//         console.log(error.name);
//         console.log(error.message);
//     })
// }
// deleteuser()