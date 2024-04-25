

const inputBox = document.getElementById("input");
const button = document.getElementById("button");
const container = document.getElementById("list-container");
const error=document.createElement("h5")
const tasksdisplayer = document.createElement("h3")
tasksdisplayer.innerHTML='Click "Add" to add tasks'
const clear_button=document.getElementById("Clear")

var has_done_error=false
card.appendChild(tasksdisplayer)
var counter = 0

button.addEventListener("click", () => {
    const newTask = document.createElement("li");
    
 // Append checkbox to the new task

    // Create a span element to hold the task text
    const taskText = document.createElement("span");
    taskText.textContent = inputBox.value;
    inputBox.value=""
    if (taskText.textContent==""){
        
        error.innerHTML="Task cant be empty string"
        error.style.color="red"
        has_done_error=true
        container.appendChild(error)
    }else{
        if(has_done_error==true){
            has_done_error=false
            container.removeChild(error)
        }
        
        newTask.appendChild(taskText);
        taskText.addEventListener("click",()=>{
            newTask.classList="checked";
            if(counter>0){
                counter-=1
            }
            if(counter==0){
                tasksdisplayer.innerHTML="Hurray!!You finished all the tasks"
            }else{
            tasksdisplayer.innerHTML=`You have ${counter} tasks left to do`
            }
        })
        container.appendChild(newTask);
        counter+=1
        if (counter==1){
            tasksdisplayer.innerHTML=`You have ${counter} task left to do`
        } else{
            tasksdisplayer.innerHTML=`You have ${counter} tasks left to do`
        }
        
        
    }
     // Append task text to the new task

     // Append the new task to the container
});
clear_button.addEventListener("click",()=>{
    container.innerHTML=""
    tasksdisplayer.innerHTML='Click "Add" to add tasks'
    counter=0
})

