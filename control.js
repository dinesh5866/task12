let color = document.getElementsByClassName("blue")

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
    for(let i=0;i<color.length;i++){
        color[i].style.backgroundColor = "white"
        color[i].style.Color = "black"
    }
}