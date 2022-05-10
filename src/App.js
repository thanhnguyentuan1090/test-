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

const all = [60, 40, 55, 75, 64];

function alternatingSums(a) {
  const team1 = a.filter((a, i) => i % 2 === 0);
  const team2 = a.filter((a, i) => i % 2 === 1);

  const sum1 = team1.reduce((partialSum, a) => partialSum + a, 0);
  const sum2 = team2.reduce((partialSum, a) => partialSum + a, 0);

  const weightedSum = [];
  weightedSum.push(sum1, sum2);
  console.log(weightedSum);
}

alternatingSums(all);

export default adjacentElementsProduct;
export { alternatingSums };
