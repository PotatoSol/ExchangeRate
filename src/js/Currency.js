//currency object
export class Currency{
  constructor(amount, native, target){
    this.amount = amount;
    this.native = native;
    this.target = target;
  }

  calculateConversion(){
    fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/${this.native}/eur/${this.amount}`)
      .then(function(response){
        console.log(response.url[0]);
        if(response.status !== 200){
          //did not receive a 200 response
        }else if(response[1] === "unsupported-code"){
          console.log("invalid");
        } else {
          console.log(response.conversion_result);
        }
      });
  }
}

