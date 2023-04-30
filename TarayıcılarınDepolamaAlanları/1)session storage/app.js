//session storage- key ve value

// butonları seçmek

const add = document.querySelector("#add");
const del = document.querySelector("#delete");
const clear = document.querySelector("#clear");

//inputlar

const addkey = document.querySelector("#addkey");
const addvalue = document.querySelector("#addvalue");
const deletekey = document.querySelector("#deletekey");


//eventler
add.addEventListener("click",addItem);
del.addEventListener("click",delItem);
clear.addEventListener("click",clearItems);

//event function

function addItem(e){
    sessionStorage.setItem(addkey.value,addvalue.value);
}

function delItem(e){
    sessionStorage.removeItem(deletekey.value);
}

function clearItems(e){
    sessionStorage.clear();
}





