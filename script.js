let add = document.querySelector("#add-btn");
let out = document.querySelector("#out-btn");
let addForm = document.querySelector(".add-section");
let outForm = document.querySelector(".out-section");

add.addEventListener("click", () => {
  outForm.classList.add("hidden");
  addForm.classList.remove("hidden");
});
out.addEventListener("click", () => {
  addForm.classList.add("hidden");
  outForm.classList.remove("hidden");
});
// string to number function
function textString(id) {
  let h2 = document.getElementById(id).innerText;
  let mainBalench = parseFloat(h2);
  return mainBalench;
}
// INPUT STRING  TO NUMBER
function inpString(id) {
  let velu = document.getElementById(id).value;
  return parseFloat(velu);
}
// ADD MONEY FUNCTION
let addingManey = document.querySelector(".add-maney");
addingManey.addEventListener("click", (e) => {
  e.preventDefault(); //btn click korle velu gul;a cole jay tar jonno ata
  let mainTaka = textString("h2"); //main balech
  // input amount ar jonnomfunction
  let addingAmount = inpString("add");
  let addPin = inpString("pin");
  // condition
  if (addPin === 1234) {
    let newTaka = addingAmount + mainTaka;
    document.querySelector("h2").innerText = newTaka;
  } else {
    alert("pleac Rigth pin");
  }
});
// CASH OUT FUNCTION
let cashingManey = document.querySelector(".cash-maney");
cashingManey.addEventListener("click",(e)=>{
  e.preventDefault()
  let mainBalenchNow=textString("h2")
  let cashOutAmount=inpString("cash")
  let cashOutPin=inpString("cashPin")
  if(cashOutAmount > mainBalenchNow){
    return ""
  }
  if(cashOutPin === 1234){
    let newBalench=mainBalenchNow - cashOutAmount
  document.getElementById("h2").innerText=newBalench


  }else{
    alert("input rigth Pin")
  }



})
