console.log(this);

// set timeout
setTimeout(function(){
    console.log("naber");
},2000); // 2 sn sonra işlem yapıyor


// set interval
let i = 0;
let value = setInterval(function(){
    i++;
    console.log("Sayi:",i);

},1000); // 1 sn aralıklarla fonks tekrar çalıştırır


// clear interval-set interval durdurmak için

document.getElementById("btn").addEventListener("click",function(){
    clearInterval(value);
});








