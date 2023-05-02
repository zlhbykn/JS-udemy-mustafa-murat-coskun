//OOP

// console.log(this); global scope

/*
const emp1 = { //object literal
    name : "mustafa",
    age : 25,
    showInfos:function(){
        console.log("bilgiler gösteriliyor");
    }
};

const emp2 = { 
    name : "ahmet",
    age : 25,
}

emp1.salary = 4000;
emp1.showInfos();
console.log(emp1);
*/

/*
function Employee(){ //yapıcı fonksiyon-constructor
    this.name = "mustafa"
}

const emp1 = new Employee();
console.log(emp1);
const emp2 =new Employee();
console.log(emp1);
*/


function Employee(name,age,salary){ //yapıcı fonksiyon-constructor
    this.name = name;
    this.age = age;
    this.salary = salary;
    //console.log(this);
    this.showInfos = function(){
        console.log(this.name,this.age,this.salary);
    }
}

const emp1 = new Employee("mustafa",25,4000);
const emp2 = new Employee("ahmet",25,5000);

// console.log(emp1);
// console.log(emp2);

emp1.showInfos();
emp2.showInfos();




