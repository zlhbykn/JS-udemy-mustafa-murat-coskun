document.getElementById("change").addEventListener("click",change);

function change(){
    const xhr = new XMLHttpRequest();

    xhr.open("GET","https://api.exchangeratesapi.io/latest",true);
    xhr.onload = function(){
        if(this.status == 200){
            const response = JSON.parse(this.responseText);
            //console.log(this.responseText); 
            
            const rate = response.rates.TRY;
            const amount = Number(document.getElementById("amount").value);   
            // console.log(amount * rate);

            document.getElementById("tl").value = amount * rate ;
            
            // console.log(response.rates.TRY);
            // console.log(typeof response.rates.TRY); //number
            // console.log(typeof document.getElementById("amount").value); //string
        }
    }
    xhr.send();
}















