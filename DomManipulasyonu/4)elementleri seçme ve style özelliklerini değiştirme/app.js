const element=document.querySelector("#clear-todos");

//! element özellikleri
/*
console.log(element.id);
console.log(element.className);
console.log(element.classList);
console.log(element.classList[1]);
console.log(element.textContent);
console.log(element.innerHTML);
console.log(element.href);
console.log(element.style);
*/

//! style ve element özelliklerini değiştirme
/*
element.className="btn btn-primary";
element.style.color="#000";
element.style.marginLeft="50px";
element.href="https://www.google.com.tr";
element.target="_blank";
element.textContent="silin";
element.innerHTML="<span>silin</span>"

*/

console.log(element);


//! li leri seçelim 

/*
const elements = document.querySelectorAll(".list-group-item");

elements.forEach(function(element){
    element.style.color="red";
    element.style.backgroundColor="#eee";
    console.log(element);
});

console.log(elements);
*/



let element2=document.querySelector("li:last-child");
element2 =document.querySelector("li:nth-child(2)");
element2 =document.querySelector("li:nth-child(3)");
element2 =document.querySelectorAll("li:nth-child(odd)"); //tek sayıdaki çocuklar
element2 =document.querySelectorAll("li:nth-child(even)"); //çift sayıdaki çocuklar

element2.forEach(function(el){
    el.style.backgroundColor="#ccc";
    el.style.color="red";
});

console.log(element2);



