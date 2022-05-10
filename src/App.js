import logo from "./logo.svg";
import "./App.css";
var input = [2, 3, -5, -2, 4];
function adjacentElementsProduct(inputArray) {
  let output;
  let outputvalue = inputArray[0];
  for (var i = 0; i < inputArray.length; i++) {
    output = inputArray[i] * inputArray[i + 1];
    if (output > outputvalue) {
      outputvalue = output;
    }
  }
  console.log("" + outputvalue);
}
adjacentElementsProduct(input);

function alternatingSums(a) {
  var input2 = [60, 40, 55, 75, 64];
  input2 = input2.filter(i => input2(i){
    return(I )
  });
  console.log(input2);
}

export default adjacentElementsProduct;
export { alternatingSums };
