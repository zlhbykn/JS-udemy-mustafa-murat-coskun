function getData(data){
    //promise objesi dödüren fonksiyon
    return new Promise((resolve, reject) => {
       setTimeout(function(){

        resolve("olumlu sonuç");

       },5000); 
    });


}

getData("merhaba").then(function(response){
console.log(response);
});

//----------------------------------------------------------------------


function getData(data){
    //promise objesi dödüren fonksiyon
    return new Promise((resolve, reject) => {
       setTimeout(function(){

        reject("olumsuz sonuç");

       },5000); 
    });


}

getData("merhaba").catch(function(err){
console.log(err);
});

//-----------------------------------------------------------

function getData(data){
    //promise objesi dödüren fonksiyon
    return new Promise((resolve, reject) => {
       setTimeout(function(){

       if(typeof data === "string"){
        //olumlu
        resolve(data);
       }else{
        //olumsuz
        reject(new Error("lütfen bir string değer giriniz"));
       }

       },5000); 
    });


}

getData("merhaba")
.then((response)=>console.log("gelen değer "+response))
.catch((err)=>console.error(err));

getData(24)
.then((response)=>console.log("gelen değer "+response))
.catch((err)=>console.error(err));

//--------------------------------------------

function addTwo(number){
    return new Promise((resolve, reject) => {
        
        setTimeout(function(){
            if( typeof number === "number"){
                resolve(number+2);
            }else{
                reject(new Error("lütfen bir sayı giriniz"));
            }
        },3000);
    });

}


addTwo(10).then(response=>{
    console.log(response);
    return response+2;
}).then(response2=>console.log(response2))
.catch(err=>console.error(err));


addTwo("merhaba").then(response=>{
    console.log(response);
    return response+2;
}).then(response2=>console.log(response2))
.catch(err=>console.error(err));
//yalnızca 1 tane catch birden fazla then kullanabiliriz.-Promise chain 
















