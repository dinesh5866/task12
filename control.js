let BlueColor = document.getElementsByClassName("blue")
let GreenColor = document.getElementsByClassName("green")
let RedColor = document.getElementsByClassName("red")

function blue(){
    document.getElementsByClassName("blue")[0].style.backgroundColor = "blue";
}
function green(){
    document.getElementsByClassName("green")[0].style.backgroundColor = "green";
}
function red(){
    document.getElementsByClassName("red")[0].style.backgroundColor = "red";
}
function reset(){
    for(let i=0;i<BlueColor.length;i++){
        BlueColor[i].style.backgroundColor = "white"
        BlueColor[i].style.Color = "black"
    }
    for(let i=0;i<GreenColor.length;i++){
        GreenColor[i].style.backgroundColor = "white"
        GreenColor[i].style.Color = "black"
    }
    for(let i=0;i<RedColor.length;i++){
        RedColor[i].style.backgroundColor = "white"
        RedColor[i].style.Color = "black"
    }
    
}