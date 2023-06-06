// async function test(data){ 
//     //promise döndürüyor return new promise
//     return data;
// }

// test("merhaba").then(response => console.log(response));

//--------------------------------------------
// async function test(data){ 
//     let promise = new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             resolve("bu bir değerdir");
//         },5000);
//     });
//     let response = await promise; // 5 sn bekleyecek
//     //await, async bir fonk içinde çalışır

//     console.log(response);
//     console.log("naber");
// }

// test("merhaba");

//----------------------------------------------

// async function test(data){ 
//     let promise = new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             resolve("bu bir değerdir");
//         },5000);
//     });
//     let response = await promise; // 5 sn bekleyecek
//     return response;    
// }

// test("merhaba").then(response => console.log(response));

// //------------------------------------------------

// async function testData(data){
//     let promise = new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             if(typeof data === "string"){
//                 resolve(data);
//             }else{
//                 reject(new Error("lütfen string bir değer giriniz"));
//             }
//         },5000);
//     });

//     const response = await promise;

//     return response;
// }

// testData("thriller").then(data => console.log(data))
// .catch(err => console.log(err));

// testData(24).then(data => console.log(data))
// .catch(err => console.log(err));

//-------------------------------------------------

async function getCurrency(url){

    const response = await fetch(url); //response object
    console.log(response);

    const data = await response.json(); //json object

    console.log(data);
    return data;
}

getCurrency("https://api.exchangeratesapi.io/latest").then(response => console.log(response));