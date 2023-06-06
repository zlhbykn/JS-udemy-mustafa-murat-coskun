class Request{

    async get(url){ 
       
        const response = await fetch(url); //response object

        const data = await response.json(); //json object

        return data;
    }

    async post(url,data){
        
        const response = await fetch(url,{
                method: 'POST',
                body : JSON.stringify(data),
                headers : {
                    "Content-type":"application/json; charset=UTF-8"
                }
            }); //response object

        const responsedata = await response.json(); // json object

        return responsedata;
    }

    async put(url,data){

        const response = await fetch(url,{
                method: 'PUT',
                body : JSON.stringify(data),
                headers : {
                    "Content-type":"application/json; charset=UTF-8"
                }
            }); // response object

        const responsedata = await response.json();

        return responsedata;
    }

    async delete(url){

        const response = await fetch(url,{
                method: 'DELETE'
            }); //response object

        return "veri silme işlemi başarılı";
    }
    
}

const request = new Request();

//---------------------------------------------------------

request.get("https://jsonplaceholder.typicode.com/albums")
.then(albums => console.log(albums))
.catch(err => console.log(err));

//---------------------------------------------------------

request.post("https://jsonplaceholder.typicode.com/albums",{userId:1,title:"thriller"})
.then(newAlbum => console.log(newAlbum))
.catch(err => console.log(err));

//---------------------------------------------------------

request.put("https://jsonplaceholder.typicode.com/albums/1",{userId:10,title:"tarkan karma"})
.then(newAlbum => console.log(newAlbum))
.catch(err => console.log(err));

//----------------------------------------------------------

request.delete("https://jsonplaceholder.typicode.com/albums/1")
.then(response => console.log(response))
.catch(err => console.log(err));