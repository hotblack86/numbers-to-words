
class Numbers {
  constructor(input){

    this.input = input;
    this.len = input.toString().length
    
    this.singleDigits = ['zero','one','two','three','four',
    'five','six','seven','eight','nine']; 
    
    this.doubleDigits = ['ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen',
    'seventeen','eighteen','nineteen']; 
    
    this.tensMultiple = ['','','twenty','thirty','forty','fifty',
    'sixty','seventy','eighty','ninety'];

    
    this.result = [];
  }

  toWords() {
    const num = this.input
    const len = this.len
    const numArr = Array.from(String(num), Number);
    const teens = parseInt(numArr.slice(1, 3).join(""));

    const units = this.singleDigits
    const doubles = this.doubleDigits
    const tens = this.tensMultiple

    if (len == 1) {
      this.result.push(units[num]);
    } 
    if (len == 2 && num < 20) {
      this.result.push(doubles[num - 10]);
    }
    if (len == 2 && num >= 20) {
      this.result.push(tens[numArr[0]]);
      this.result.push(units[numArr[1]]);
    }
    if (len == 3) {
      this.result.push(units[numArr[0]]);
      this.result.push("hundred");
      if (numArr[1] >= 2) {
        this.result.push("and");
        this.result.push(tens[numArr[1]]);
        this.result.push(units[numArr[2]]);
      } else if (numArr[1] == 1) {
        this.result.push("and");
        this.result.push(doubles[teens - 10]);
      } else if (numArr[1] == 0 && numArr[2] > 0) {
        this.result.push("and");
        this.result.push(units[numArr[2]]);
      }
      
    }
}






}

module.exports = Numbers;

