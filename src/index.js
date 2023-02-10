import {Currency} from "./js/currency.js";

function handleSubmission(){ 
  Currency.calculateConversion(
    document.getElementById("amountInput").value,
    document.getElementById("nativeInput").value,
    document.getElementById("targetInput").value
  ).then(function(response){
    document.getElementById("output").innerText = (Intl.NumberFormat(document.getElementById("targetInput").value, {style: 'currency', currency: document.getElementById("targetInput").value}).format(response[0].conversion_result));
  }).catch(function(error){
    let errorResult = error;
    if(errorResult[0].status == 404){
      Currency.checkInput(document.getElementById("nativeInput").value).then(function(){
        document.getElementById("output").innerText = `404: ${document.getElementById("targetInput").value} is not a valid currency.`;
      }).catch(function(){
        document.getElementById("output").innerText = `404: ${document.getElementById("nativeInput").value} is not a valid currency.`;
      });
    } else {
      console.log(error);
    }
  });
}

window.addEventListener("load", function(){
  document.getElementById("userInput").addEventListener("submit", function(event){
    event.preventDefault();
    handleSubmission();
  });
});