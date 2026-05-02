let inp=document.querySelectorAll(".sidebar-icons,.channel-subs");
console.log(inp);

function click(){
     inp.forEach(function (val2) {
       val2.style.backgroundColor = "";
       val2.style.backgroundColor=".1s"
     });
this.style.backgroundColor = "rgb(232, 232, 232)";
this.style.transition=".1s";
}
inp.forEach(function(val){
   
val.addEventListener("click",click);

})
// inp.forEach(function(val){
// val.removeEventListener("click", click);

// })

