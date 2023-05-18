//ajax,callback, http requests

class Request{


    constructor(){
        this.xhr = new XMLHttpRequest();
    }

    //Get request

    get(url,callback){

        this.xhr.open("GET",url); //bağlantıyı açtık
       
        this.xhr.onload = () =>{
            if(this.xhr.status === 200) {
                callback(null,this.xhr.responseText); //isteğimiz bitti-fonk gönderiyoruz
                
            }else{
                callback("get request : herhangi bir hata oluştu",null);
            }
        };

        this.xhr.send();
    }

    //post request

    post(url,data,callback){

        this.xhr.open("POST",url);
        this.xhr.setRequestHeader("Content-type","application/json"); //Json verisi göndercez
        
        this.xhr.onload = () => {
            if(this.xhr.status === 201){
                //başarılı
                callback(null,this.xhr.responseText);
            }else{
                //hata
                callback("post request : herhangi bir hata oluştu",null);
            }
        }

        this.xhr.send(JSON.stringify(data));
    }

    //put request

    put(url,data,callback){

        this.xhr.open("PUT",url);
        this.xhr.setRequestHeader("Content-type","application/json");
        this.xhr.onload = ()=>{
            if(this.xhr.status === 200){
                //başarılı
                callback(null,this.xhr.responseText);
            }else{
                //hata
                callback("put request: herhangi bir hata oluştu",null);
            }
        }
        this.xhr.send(JSON.stringify(data));
    }

    //delete request
    
    delete(url,callback){
        this.xhr.open("DELETE",url);
        this.xhr.onload = () => {
            if(this.xhr.status === 200){
                //başarılı
                callback(null,"veri silme işlemi başarılı");
            }else{
                //hata
                callback("delete request : herhangi bir hata oluştu",null);
            }
        }
        this.xhr.send();

    }
}

const request = new Request();
//------------------------------------------------------------------------------------
// request.get("https://jsonplaceholder.typicode.com/albums",function(err,response){
//    if(err === null){
//     //başarılı
//     console.log(response);
//    }else{
//     //hata
//     console.log(err);
//    }
// });
//----------------------------------------------------------------------------------------

// request.post("https://jsonplaceholder.typicode.com/albums",{userId:2, title:"Thriller"},function(err,response){
//     if(err === null){
//         //başarılı
//         console.log(response);
//     }else{
//         //hata
//         console.log(err);
//     }
// });
//----------------------------------------------------------------------------------
// request.put("https://jsonplaceholder.typicode.com/albums/10",{userId:143,title:"Tarkan"},function(err,response){
//     if(err === null){
//         //başarılı
//         console.log(response);
//     }else{
//         //hata
//         console.log(err);
//     }
// });
//---------------------------------------------------------------------------------

// request.delete("https://jsonplaceholder.typicode.com/albums/3",function(err,response){
//     if(err === null){
//         //başarılı
//         console.log(response);
//     }else{
//         //hata
//         console.log(err);
//     }
// });







