import axios from  "axios";

const baseurl = "https://online-exam-backend-production-12ba.up.railway.app";
function sendOTP() {
    const url = baseurl + "/api/auth/send-otp";

    const body = {
        emailOrPhoneNumber: "9666665154"
    };

    axios.post(url, body, {
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error(error.response?.data || error.message);
    });
}

sendOTP();

function verifyOTP() {
    const url = baseurl + "/api/auth/verify-otp";

    const body = {
        authLogId: "9bd5478f-379f-4e7f-bf3a-ace184205c1a",
        otp: "637668"
    };

    axios.post(url, body, {
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error(error.response?.data || error.message);
    });
}

verifyOTP();

function addStates() {
    const url = baseurl + "/api/geo/states";

    const body = {
        stateName: "West Bengal",
        country: "india"
    };

    axios.post(url, body, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiQURNSU5JU1RSQVRPUiIsInBlcm1pc3Npb25zIjpbXSwic3ViIjoiNzk4YjRiNTgtOGFmNi00ZDAzLThlZDEtYmEzOGU0OTFkODI1IiwiaWF0IjoxNzY5MDk5MDI4LCJleHAiOjE3NjkxMjYzOTl9.5lGwz8p3bDWvKF0btn357pDDPniIaC6ADNsxm20Gcak"
        }
    })
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error(error.response?.data || error.message);
    });
}

addStates();

function getStates() {
    const url = baseurl + "/api/geo/states";

    axios.get(url, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiQURNSU5JU1RSQVRPUiIsInBlcm1pc3Npb25zIjpbXSwic3ViIjoiNzk4YjRiNTgtOGFmNi00ZDAzLThlZDEtYmEzOGU0OTFkODI1IiwiaWF0IjoxNzY5MDk5MDI4LCJleHAiOjE3NjkxMjYzOTl9.5lGwz8p3bDWvKF0btn357pDDPniIaC6ADNsxm20Gcak"
        }
        })
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error(error.response?.data || error.message);
    });
}

getStates();
