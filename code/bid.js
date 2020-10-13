let dispElem = document.getElementById("disp");

let dispStr = localStorage.getItem("LocalStorageBidArray");
let dispArr = JSON.parse(dispStr) || [];
console.log(dispArr);
dispElem.innerText = dispArr;


function placeBid(name) {
 if (name == "person1") {
  let bidElem = document.getElementById("Person1Bid");
  let bidAmount = bidElem.value;
  save("Person 1 Bid $" + bidAmount);
 } else if (name == "person2") {
  let bidElem = document.getElementById("Person2Bid");
  let bidAmount = bidElem.value;
  save("Person 2 Bid $" + bidAmount);
 }
 dispElem.innerText = dispArr;

}

function save(addToArr) {
 dispArr.push(addToArr);
 localStorage.setItem("LocalStorageBidArray", JSON.stringify(dispArr));
 console.log("saved!");
}