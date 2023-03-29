const name = "Mustafa Murat Coşkun";
const department = "Bilişim";
const salary = 4000;

// const a = "isim: " + name + "\n" + "Depertman: " + department + "\n" + "Maaş: " + salary ;
// \n 1 satır aşağı
//! temlate literal kullanırsak (alt gr + ; basarak ``)

//todo const a = `İsim:${name}\nDepatman:${department}\nMaaş:${salary}`;

/*
const html = "<ul>" +
             "<li>" + name + "</li>" +
             "<li>" + department + "</li>" +
             "<li>" + salary + "</li>" +
             "</ul>"; 

document.body.innerHTML = html;
*/

function a(){
    return "merhaba"
};
const html = `
        <ul> 
        <li>${name}</li>
        <li>${department}</li>
        <li>${salary}</li>
        <li>${10 / 4}</li>
        <li>${a()}</li>

        </ul>
`;

document.body.innerHTML = html;





console.log(a);


