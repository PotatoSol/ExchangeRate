//get user amount
//get user currency
//get target currency
//return target currency

//error check - on page
//  * for invalid currency
//  * for non-200 api response
import {Currency} from "./js/currency.js";

function handleSubmission(){  
  Currency.calculateConversion(
    document.getElementById("amountInput").value,
    document.getElementById("nativeInput").value,
    document.getElementById("targetInput").value
  ).then(function(response){
    //console.log(response);
    document.getElementById("output").innerText = (Intl.NumberFormat(document.getElementById("targetInput").value, {style: 'currency', currency: document.getElementById("targetInput").value}).format(response[0].conversion_result));
  }).catch(function(error){
    let errorResult = error;
    if(errorResult[0].status == 404){
      document.getElementById("output").innerText = "404: One of the currencies not found, check your inputs!";
    } else {
      document.getElementById("output").innerText = errorResult[0].status + ": " + errorResult[0].statusText;
    }
  });
}

window.addEventListener("load", function(){
  document.getElementById("userInput").addEventListener("submit", function(event){
    event.preventDefault();
    handleSubmission();
  });
});