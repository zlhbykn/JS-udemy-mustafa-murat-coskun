// ! readyState
// Holds the status of the XMLHttpRequest.
// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready
// ! http status
// Returns the status-number of a request
// 200: "OK"
// 403: "Forbidden"
// 404: "Not Found"
// 505: "Intenal server error"

document.getElementById("btn").addEventListener("click",getTxt);

function getTxt(){
    const xhr = new XMLHttpRequest();
    xhr.onprogress = function(){
        console.log("progress işleniyor...",this.readyState);
    }

    xhr.onload = function(){
        if(this.status === 200){
            console.log(this.responseText);
            document.getElementById("ajax").textContent = this.responseText;
        }
    }
    
    // xhr.onreadystatechange = function(){
    //     // console.log(this.readyState);
    //     // console.log(this.status);
    //     if(this.status == 200 && this.readyState == 4){
    //         // response hazır
    //         console.log(this.responseText);
    //         document.getElementById("ajax").textContent = this.responseText;
    //     }
    // }

    xhr.open("GET","example.txt",true); //GET,DELETE,POST,PUT
    xhr.send(); //POST yapsaydık içine yazmamız lazım.

   }