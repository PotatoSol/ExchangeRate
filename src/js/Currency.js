//currency object
export class Currency{
  constructor(){
  }

  calculateConversion(amount, native, target){
    /*
    still not sure why this doesn't work/how to get it to work
    fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/${this.native}/eur/${this.amount}`)
      .then(function(response){
        console.log(response.url);
        if(response.status !== 200){
          //did not receive a 200 response
        }else if(response[1] === "unsupported-code"){
          console.log("invalid");
        } else {
          console.log(response.conversion_result);
        }
      });
    */
    let native = this.native;
    let amount = this.amount;
    let target = this.target;
    let promise = new Promise(function(resolve, reject){
      let request = new XMLHttpRequest();
      const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/${native}/${target}/${amount}`;
      request.addEventListener("loadend", function() {
        const response = JSON.parse(this.responseText);
        if(this.status === 200){
          resolve([response, this.amount]);
        } else { 
          console.log('hey');
          reject([this, response, this.amount]);
        }
      });
      request.open("GET", url, true);
      request.send();
    });
    return promise;
  }
}

