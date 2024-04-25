const button = document.getElementById("circle-button")
const container = document.getElementById("all")
const inputbox=document.getElementById("input")
const tasksdisplayer=document.getElementById("counter")
const para = document.getElementById("paragraph")

var current = 0
var total = 0
button.addEventListener("click",()=>{
    const newTask = document.createElement("div")
    
    newTask.className="newtask"
    if (total==0){
        newTask.style.marginTop="15px"
    }
    const text = document.createElement("h5")
    text.style.color="white"
    text.style.marginLeft="30px"
    text.style.width="100px"

    const circle=document.createElement("div")
    circle.className="unchecked-circle"
    newTask.appendChild(circle)
    if (inputbox.value!=""){
        text.innerHTML=inputbox.value
        inputbox.value=""
    }
    
    newTask.addEventListener("click",()=>{
        if (circle.classList.contains("checked-circle")==false){
            current+=1
        }
        circle.className="checked-circle"
        text.classList.add("checked")
        tasksdisplayer.innerHTML=`${current}/${total}`
        
    })
    
    if (text.innerHTML!=""){
        total+=1
        tasksdisplayer.innerHTML=`${current}/${total}`
        newTask.appendChild(text)
        container.appendChild(newTask)
    }
    


})



