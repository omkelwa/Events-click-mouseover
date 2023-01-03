let one = document.getElementById("one")
let button = document.querySelector("button")

button.addEventListener("click", showHide)

function showHide(){
        if(one.style.display === 'block'){
            one.style.display = 'none'
        }
        else{
            one.style.display = 'block'
        }
        
    }

    let two = document.getElementById("two")
two.addEventListener("mouseover", Disco)

function Disco(e){
    e.preventDefault()
    two.style.borderRadius = "250px"
    two.style.backgroundColor =
    "rgb(" + e.offsetX + "," + e.offsetY + ",25)";
    document.body.style.backgroundColor = 
    "rgb("+ e.offsetY + "," + e.offsetX + " ,58)";
    
    
}
two.addEventListener("mouseleave", blank)
    function blank (){
        two.style.backgroundColor = "blue"
        document.body.style.backgroundColor = "white"
        two.style.borderRadius = "0px"
    }
