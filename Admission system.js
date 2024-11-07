let displayDate = new Date();
document.getElementById("datOutput").innerHTML =
  displayDate.toLocaleDateString();
document.getElementById("timOutput").innerHTML =
  displayDate.toLocaleTimeString();
const copyText = document.querySelector("#copy");
copyText.addEventListener("click", () => {
  navigator.clipboard.writeText(document.querySelector("#successCode").value);
  copyText.textContent = "copied";
  setTimeout(() => {
    copyText.innerHTML = `<span>&#128203; </span>copy`;
  }, 2000);
});

//Modal
const toggleSuccessModal = () => successModal.classList.toggle("active");
const toggleErrorModal = () => errorModal.classList.toggle("active");
window.addEventListener("click", function (event) {
  if (event.target === successModal) successModal.classList.remove("active");
  if (event.target === errorModal) errorModal.classList.remove("active");
});
//Code Logic Statements
let math=document.getElementById("maths");
let phy=document.getElementById("physics");
let che=document.getElementById("chemistry");
let cutOff=document.getElementById("cutoff");
let res=document.getElementById("result");
function findCutOff(){
    let opt=document.querySelector('input[name="community"]:checked');

    if(math.value==='' || phy.value==='' || che.value===''){
        alert("Enter Required Fields");
        return;
    }
    if(math.value<0 || math.value>100 || phy.value<0 || phy.value>50 || che.value<0 || che.value>50 ){
        alert("Check the mark range");
        return;
    }
    cutOff.value=(math.valueAsNumber)+(phy.valueAsNumber)+(che.valueAsNumber);
    if(opt.value==="oc"){
        if(cutOff.valueAsNumber>=195 && cutOff.valueAsNumber<=200){
            res.innerText="Level 1 Government Engineering College";
        }
        else if(cutOff.valueAsNumber>=190 && cutOff.valueAsNumber<195){
            res.innerText="Level 2 Government Engineering College";
        }
        else if(cutOff.valueAsNumber>=185 && cutOff.valueAsNumber<190){
            res.innerText="Level 1 Private Engineering College";
        }
        else if(cutOff.valueAsNumber>=180 && cutOff.valueAsNumber<185){
            res.innerText="Level 2 Private Engineering College";
        }
        else{
            res.innerText="Not Eligible for Engineering course";
        }
        return;
    }
    if(opt.value==="bc"){
        if(cutOff.valueAsNumber>=194 && cutOff.valueAsNumber<=200){
            res.innerText="Level 1 Government Engineering College";
        }
        else if(cutOff.valueAsNumber>=189 && cutOff.valueAsNumber<194){
            res.innerText="Level 2 Government Engineering College";
        }
        else if(cutOff.valueAsNumber>=184 && cutOff.valueAsNumber<189){
            res.innerText="Level 1 Private Engineering College";
        }
        else if(cutOff.valueAsNumber>=179 && cutOff.valueAsNumber<184){
            res.innerText="Level 2 Private Engineering College";
        }
        else{
            res.innerText="Not Eligible for Engineering course";
        }
        return;
    }
    if(opt.value==="sc"){
        if(cutOff.valueAsNumber>=193 && cutOff.valueAsNumber<=200){
            res.innerText="Level 1 Government Engineering College";
        }
        else if(cutOff.valueAsNumber>=188 && cutOff.valueAsNumber<193){
            res.innerText="Level 2 Government Engineering College";
        }
        else if(cutOff.valueAsNumber>=183 && cutOff.valueAsNumber<188){
            res.innerText="Level 1 Private Engineering College";
        }
        else if(cutOff.valueAsNumber>=178 && cutOff.valueAsNumber<183){
            res.innerText="Level 2 Private Engineering College";
        }
        else{
            res.innerText="Not Eligible for Engineering course";
        }
        return;
    }

}
function reset(){
 let opt=document.querySelector('input[name="community"]:checked');
 math.value='';
 phy.value='';
 che.value='';
 cutOff.value='';
 res.value='';
 opt.checked=false;
}
