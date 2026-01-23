// let baseurl = "https://online-exam-backend-production-12ba.up.railway.app";

// function sendOTP() {
//     let url = baseurl + "/api/auth/send-otp";
    
//     let body = {
//         emailOrPhoneNumber: "9666665154"
//     };

//     fetch(url, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(body)
//     })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error(response.status + " " + response.statusText);
//         }
//         return response.json();
//     })
//     .then(result => {
//         console.log(result);
//     })
//     .catch(err => {
//         console.error(err);
//     });
// }

// sendOTP();

// let baseurl = "https://online-exam-backend-production-12ba.up.railway.app";

// function verifyOTP() {
//     let url = baseurl + "/api/auth/verify-otp";
    
//     let body = {
//         "authLogId": 'f4713876-02ac-4784-a2e9-c337b0e7f9ab',
//         "otp": '812965'
//     };

//     fetch(url, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(body)
//     })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error(response.status + " " + response.statusText);
//         }
//         return response.json();
//     })
//     .then(result => {
//         console.log(result);
//     })
//     .catch(err => {
//         console.error(err);
//     });
// }

// verifyOTP();

let baseurl = "https://online-exam-backend-production-12ba.up.railway.app";
function addStates() {
    let url = baseurl + "/api/geo/states";
    
    let body = {
                "stateName": "Sikkim",
                "country": "india"
               }

    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "authorization" : "Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiQURNSU5JU1RSQVRPUiIsInBlcm1pc3Npb25zIjpbXSwic3ViIjoiNzk4YjRiNTgtOGFmNi00ZDAzLThlZDEtYmEzOGU0OTFkODI1IiwiaWF0IjoxNzY4OTkyMTk2LCJleHAiOjE3NjkwMzk5OTl9.RJI-sKEwgFhidQEZ_VX3ugh7-oW0Js8TzcqQBBbVZQM"
        },
        body: JSON.stringify(body)

    })
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
        console.error(err);
    });
}
addStates();

// let baseurl = "https://online-exam-backend-production-12ba.up.railway.app";
// function getStates() {
//     let url = baseurl + "/api/geo/states"

//     fetch(url, {
//         method: "GET",
//         headers: {
//             "Content-Type": "application/json",
//             "authorization" : "Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiQURNSU5JU1RSQVRPUiIsInBlcm1pc3Npb25zIjpbXSwic3ViIjoiNzk4YjRiNTgtOGFmNi00ZDAzLThlZDEtYmEzOGU0OTFkODI1IiwiaWF0IjoxNzY4OTkyMTk2LCJleHAiOjE3NjkwMzk5OTl9.RJI-sKEwgFhidQEZ_VX3ugh7-oW0Js8TzcqQBBbVZQM"
//         },

//     })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error(response.status + " " + response.statusText);
//         }
//         return response.json();
//     })
//     .then(result => {
//         console.log(result);
//     })
//     .catch(err => {
//         console.error(err);
//     });
// }
// getStates()

