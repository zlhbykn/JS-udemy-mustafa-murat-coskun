// elementleri değiştirme-replace

//<h5 class="card-title" id = "tasks-title">Todolar</h5>

const cardBody = document.querySelectorAll(".card-body")[1];

const newElement = document.createElement("h3");
newElement.className = "card-title";
newElement.id = "tasks-title";
newElement.textContent ="yeni todolar";

//eski element

const oldElement = document.querySelector("#tasks-title");

cardBody.replaceChild(newElement,oldElement);


console.log(cardBody);