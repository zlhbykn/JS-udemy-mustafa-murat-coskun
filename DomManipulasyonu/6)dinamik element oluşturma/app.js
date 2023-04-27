//yeni element oluşturma
//<a id = "clear-todos" class="btn btn-dark" href="#">Tüm Taskları Temizleyin</a>               
const newLink = document.createElement("a");

const cardBody = document.querySelectorAll(".card-body")[1];

newLink.id="clear-todos";
newLink.className="btn btn-danger";
newLink.href="https://www.google.com.tr";
newLink.target="_blank";
newLink.textContent="yeni link";

cardBody.appendChild(newLink);







console.log(cardBody);
console.log(newLink);