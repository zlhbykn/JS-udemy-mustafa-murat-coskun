document.getElementById("btn").addEventListener("click",function(){
    //XMLHttpRequest
    const xhr = new XMLHttpRequest();

    xhr.onload = function(){//bu fonk readyState zaten 4 se çalışır
        if(this.status === 200){
            console.log(this.responseText);
            document.getElementById("ajax").textContent = this.responseText;
        }
    }
    /*
    xhr.onprogress = function(){// bu fonk ready state 3 iken çalışır.
        console.log("process işleniyor...",this.readyState);
    }
    */
   
    /*
    xhr.onreadystatechange = function(){
        //console.log(this.readyState);
        //console.log(this.status);
        if(this.status == 200 && this.readyState == 4){
            //response hazır
            console.log(this.responseText);
        }

    }
    */

    xhr.open("GET","example.txt",true);

    xhr.send();

});















