// function lik(){
//     document.getElementById("mydiv").innerText="hello";
// }

// function swapna(){
//     let a = document.getElementById("mydiv").innerText="hello how r u";
//     console.log(a);
// }

// function har(){
//     let mydiv=document.getElementById("mydiv")
//     mydiv.innerText= <b><h1>"I am from vbit"</h1></b>;
// }

// function har(){
//     let mydiv=document.getElementById("mydiv")
//     mydiv.innerHTML= "<b><h1>I am from vbit</h1></b>";
// }

// function har(){
//     let name=document.getElementById("name")
//     console.log(name.value);
// }

// function har(){
//     let name=document.getElementById("name")
//     name.type="password";
// }

// function save(){
//     console.log(" save function");
    
// }

// function har(){
//     let svc =document.getElementById("svc")
//     svc.addEventListener("click",save());
// }

// function save(){
//     console.log(" save function");
    
// }
 
// function addUser(event){
//     event.preventDefault();  //get form filled details
//     console.log("add user");  //store in axios
// }

let url = "http://localhost:3000/users"
let formstate = "Add"
function addUser(event){
    event.preventDefault();
    let name=document.getElementById("name").value //to take the value we use this way
    console.log(name);
    let email=document.getElementById("email").value
    console.log(email);
    let phone=document.getElementById("phone").value
    console.log(phone);
    let user={
        "name":name,
        "email":email,
        "phone":phone
    }
    // console.log(user);
    if(formstate === 'Add'){
        axios(url,{
        method : "POST",
        data : JSON.stringify(user),
        headers : {
            "content-type":"application/json"
        }
    }).then(res=>{
        console.log(res);
        document.getElementById("message").innerText="User added successfully"
        document.getElementById("name").value="" //when we want to set the value we use this way
        document.getElementById("email").value=""
        document.getElementById("phone").value=""
        getUsers()
    }).catch(err=>{
        console.log(err);
        document.getElementById("message").innerText="Something went wrong"
    })
    }else if(formstate === 'Edit'){
        let userid = document.getElementById("userid").value
        let url2 = url +"/"+ userid
        axios(url2,{
            method : "PATCH",
            data : JSON.stringify(user),
            headers : {
                "content-type" : "application/json"
            }
        }).then(res=>{
            console.log(res);
            document.getElementById("message").innerText="User Saved"
            getUsers()
        }).catch(err=>{
            console.log(err);
            document.getElementById("message").innerText="Something went wrong"
        })

    }
    
}

function getUsers(){
    if(formstate === 'Add'){
        document.getElementById("title").innerText = "Add user"
        document.getElementById("submit-btn").value = "Add user"
    }
    axios(url)
    .then(res=>{
        console.log(res.data);
        let usersHTML = ""
        for(let user of res.data){
            usersHTML = usersHTML + `<tr>
            <td>${user['id']}</td>
            <td>${user['name']}</td>
            <td>${user['email']}</td>
            <td>${user['phone']}</td>
            <td><button onclick="deleteUser('${user['id']}')" class=" btn btn-danger w-100">delete</button></td>
            <td><button onclick="editUser('${user['id']}')" class="btn btn-success w-100">edit</button></td>
            </tr>` 
        }
        document.getElementById("users").innerHTML = usersHTML
        // console.log(usersHTML);
        
    }).catch(err=>{
        console.log(err);
    }) 
}

function deleteUser(userid){
    // console.log("delete user");
    let url2 = url + "/"+userid
    console.log(url2);
    axios(url2,{
        method : "DELETE"
    }).then(res=>{
        console.log(res);
        getUsers()
    }).catch(err=>{
        console.log(err);
    })
}

function editUser(userid){
    // console.log("user editted successfully"+userId)
    let url2 = url + "/"+userid
    console.log(url2);
    axios(url2)
    .then(res=>{
        console.log(res.data);
        let user = res.data
        document.getElementById("userid").value = user['id']
        document.getElementById("name").value = user['name']
        document.getElementById("email").value = user['email']
        document.getElementById("phone").value = user['phone']
        document.getElementById("title").innerText = "Edit user"
        document.getElementById("submit-btn").value = "Save"
        formstate = "Edit"
    }).catch(err=>{
        console.log(err);
    })
}