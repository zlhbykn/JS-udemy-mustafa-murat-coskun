// Scope kavramı

//! global scope

var value1 = 10;
let value2 = 20;
const value3 = 30;

function Func(){ 
    //! function scope
    //fonk bloğunda olduğundan değişkenler fonk özel
    var value1 = 40;
    let value2 = 50;
    const value3 = 60;
    console.log(value1,value2,value3);
}
Func();


if(true){
    //! blok scope
    var value1 = 40;
    let value2 = 50;
    const value3 = 60;
    console.log(value1,value2,value3);
    /* var değişkeni sadece bu bloğa özgü olmuyor
     aynı zamanda dışardaki değeride değiştiriyor */
    /* let ve const değerleri dışarda değişmiyor bloğa özgü kalıyor */
}


console.log(value1,value2,value3);





























