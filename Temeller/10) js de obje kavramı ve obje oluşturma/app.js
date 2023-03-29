let value;
const programmer = {
    name : "Mustafa Murat Coşkun",
    age : 25,
    email : "coskun.m.murat@gmail.com",
    langs : ["python","java","javascript"],
    address :{
            city : "ankara",
            street : "bahçelievler"
    },
    work: function(){
        console.log("programcı çalışıyor...");
    }

}
value = programmer;

value = programmer.email; //genel olarak kullandığım ama alttaki şekildede kullanılabilir
value = programmer["email"];

value = programmer.langs;

value = programmer.address.city;

programmer.work();


const programmers = [
    {name : "mustafa murat",age:25},
    {name: "oğuz",age:25}
]

value = programmers[0].name;

console.log(value);