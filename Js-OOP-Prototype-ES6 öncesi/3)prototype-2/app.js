function Employee(name,age){
    this.name = name;
    this.age = age;
    
}

Employee.prototype.showInfos = function() {
    console.log("isim: "+this.name+" yaş:"+this.age);
}

const emp1 =new Employee("mustafa",25);
const emp2 = new Employee("ahmet",25);

console.log(emp1);
console.log(emp2);
emp2.showInfos();

