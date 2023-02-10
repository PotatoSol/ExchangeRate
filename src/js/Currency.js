//currency object
export class Currency{
  constructor(amount, native, target){
    this.amount = amount;
    this.native = native;
    this.target = target;
  }

  calculateConversion(){
    fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`)
      .then(function(response){
        console.log(response);
      });
  }
}

