//arrow function

/*
const merhaba = function(){
    console.log("merhaba");
}

merhaba();
*/
//? arrow function ile yukardaki yazım sitilini aşağıdaki şekilde yazabiliriz
/*
const merhaba = () => {
    console.log("merhaba");
}

merhaba();
*/

/* -----------------------------------------
! eğer fonk da tek parametre varsa () kullanmaya gerek yok
! ama parametre yok veye birden fazla ise kullanmak gerekli
! eğer fonk içinde tek işlem yapılıyorsa {} kullanmayada gerek yok
! ama birden fazla işlem varsa kullanmak gerekli
*/

/*
const merhaba = firstName => console.log("merhaba",firstName);

merhaba("Murat");
*/

/*
const merhaba = (firstName,lastName) => console.log("merhaba",firstName,lastName);

merhaba("Murat","Coşkun");
*/

/*
const merhaba = (firstName,lastName) => {
    console.log("merhaba",firstName,lastName);
}

merhaba("Murat","Coşkun");
*/

//!--------------------------

/*
const cube = function(x){
    return x*x*x;

}

console.log(cube(4));
*/


const cube = x => x*x*x;

console.log(cube(4));
