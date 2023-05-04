
/*
function Person(name,age){
    this.name = name;
    this.age = age;

}

Person.prototype.showInfos = function(){
    console.log("isim: "+ this.name + " yaş: "+ this.age);
}


function Employee(name,age,salary){
    Person.call(this,name,age);
    this.salary = salary;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.toString =  function(){
    console.log("Employee");
}

Employee.prototype.showInfos = function(){
    console.log("isim: "+ this.name + " yaş: "+ this.age + " maaş: " + this.salary);
}

const emp =  new Employee("mustafa",25,4000);

emp.showInfos();
emp.toString();

console.log(emp);
*/

class Person{ //Superclass, BaseClass
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    showInfos(){
        console.log("isim: "+ this.name + " yaş: "+ this.age);
    }
}

class Employee extends Person {//DerivedClass, SubClass, ChildClass
    constructor(name,age,salary){
        // this.name = name;
        // this.age = age;
        super(name,age); //person classının constructor ını kullan demek 
        this.salary = salary;
    }
    showInfos(){
        console.log("isim: "+ this.name + " yaş: "+ this.age + " maaş: " + this.salary);
    }
    toString(){
        console.log("Employee");
    }
    raiseSalary(amount){
        this.salary += amount; //this.salary = this.salary + amount;
    }
}
    
const emp = new Employee("mustafa",25,4000);

emp.raiseSalary(500);

//console.log(emp);
emp.showInfos(); 
//person sınıfının methodunu kullandık ama kendi methodumu yazdığım için artık o miras fonksiyon kullanılmayacak

emp.toString();








