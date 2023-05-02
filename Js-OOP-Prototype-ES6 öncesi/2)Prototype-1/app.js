// prototype
/*
const object = new Object(); // object literal
const object2 =  new Object();
object.name = "mustafa";
console.log(object);
*/

function Employee(name,age){
    this.name = name;
    this.age = age;
    this.showInfos = function(){
        console.log("bilgiler gösteriliyor...");
    }
    this.toString = function(){
        console.log("bu bir employee objesi");
    }
}

const emp1 =  new Employee("mustafa",25);
console.log(emp1);

console.log(emp1.toString());
