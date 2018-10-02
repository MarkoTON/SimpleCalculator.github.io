function calc(){
  let valOne = Number(document.getElementById("valueOne").value);
  let valTwo = Number(document.getElementById("valueTwo").value);

  let oper = document.getElementById("operator").value;
  let calculate;

  if(oper === "add"){
    calculate = valOne + valTwo;
  } else if (oper === "min") {
    calculate = valOne - valTwo;
  } else if (oper === "mul") {
    calculate = valOne * valTwo;
  } else if (oper === "div") {
    calculate = valOne / valTwo;
  }

  document.getElementById("result").innerHTML = calculate;
  console.log(calculate);
}