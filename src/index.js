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
    //console.log(response[0].conversion_result);
    document.getElementById("output").innerText = (Intl.NumberFormat().format(response[0].conversion_result) + " " + document.getElementById("targetInput").value.  toUpperCase());
  });
}


window.addEventListener("load", function(){
  document.getElementById("userInput").addEventListener("submit", function(event){
    event.preventDefault();
    handleSubmission();
  });
});