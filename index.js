let curnumId = document.querySelector("#num-current")
let curnum = curnumId.innerHTML
let curday = document.querySelector("#week-day")
const weekArray = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
function increase(){
    if (curnum<7){
    curnum++
    console.log(weekArray[curnum-1],curnum)}
    curnumId.innerHTML=curnum
    curday.innerHTML=weekArray[curnum-1]
}
function decrase(){
    if (curnum>1){
    curnum--
    console.log(weekArray[curnum-1],curnum)}
    curday.innerHTML=weekArray[curnum-1]
    curnumId.innerHTML=curnum

}
