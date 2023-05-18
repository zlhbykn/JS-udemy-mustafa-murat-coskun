const person = {

    age :25,
    /*
    tellAge : function(){

        console.log(this); //this-person
        console.log(this.age);
    }.bind(this) //bind ile window objesini kast etiğimizi söylüyoruz
    */

     tellAge : ()=>{
        console.log(this); //this-window
        console.log(this.age);
    }
    // arrow function normal bir fonk bind ile bağlanmış hali şeklinde çalışır.
    //this-window


}

person.tellAge();













