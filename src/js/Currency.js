//currency object
export class Currency{
  constructor(){
  }

  static calculateConversion(amount, native, target){
    let promise = new Promise(function(resolve, reject){
      let request = new XMLHttpRequest();
      const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/${native}/${target}/${amount}`;
      request.addEventListener("loadend", function() {
        const response = JSON.parse(this.responseText);
        if(this.status === 200){
          resolve([response, this.amount]);
        } else { 
          reject([this, response, this.amount]);
        }
      });
      request.open("GET", url, true);
      request.send();
    });
    return promise;
  }

  static checkInput(input){
    let promise = new Promise(function(resolve, reject){
      let request = new XMLHttpRequest();
      const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/usd/${input}/100`;
      request.addEventListener("loadend", function() {
        const response = JSON.parse(this.responseText);
        if(this.status === 200){
          resolve([response, true]);
        } else {
          reject([this, false]);
        }
      });
      request.open("GET", url, true);
      request.send();
    });
    return promise;
  }
}

