var calculator = {
   readValues: function() {
     this.input1 = +prompt('Pass the number');
     this.input2 = +prompt('Pass the number');
   },
  
   sum: function() {
      return this.input1 + this.input2;
   },
  
   mul: function() {
     return this.input1 * this.input2;
   }
};

calculator.readValues();
console.log(calculator.sum());
console.log(calculator.mul());
