



function Task(title , date ,isDone){

        this.title=title,
        this.date=date,
        this.isDone=isDone
}



// let task1=new Task("Read book","15/10/2023",false);

// let task2=new Task("Final Project","15/10/2023",false);

// let task3=new Task("course Javascript","15/10/2023",false);



var tasks=[];
// tasks.push(task1);
// tasks.push(task2);
// tasks.push(task3);

if(JSON.parse(localStorage.getItem("tasks")==null)){
    tasks=[];
}else{
    tasks=JSON.parse(localStorage.getItem("tasks"));
}


fulltask();


function fulltask(){

    let index=0;

    document.getElementById("contenttask").innerHTML="";
    for(eltask of tasks ){
        
        document.getElementById("contenttask").innerHTML +=`  <div class="task  ${eltask.isDone ? 'done' : ' '} " >
        <!-- Info-->
        <div class="taskinfo">
            <h2>${eltask.title}</h2>
            <div>
                <span class="material-symbols-outlined">
                    calendar_month
                    </span>
                <span>${eltask.date}</span>
        
            </div>
        </div>
        <!-- End Info-->
        
        <div class="taskaction">
        <button class="circle btnd" onclick="deleteTask(${index})">
        
        <span class="material-symbols-outlined ">
         delete
            </span>
        </button>
 
        ${eltask.isDone ? `
        <button class="circle btnc doneedit " onclick="toggleTaskComplation(${index})" ><span class="material-symbols-outlined ">
        cancel
        </span>
       </button>
       ` :`
       <button class="circle btnc  " onclick="toggleTaskComplation(${index})" ><span class="material-symbols-outlined ">
        done
        </span>
       </button>`
        
        }
   
        <button class="circle btne" onclick="editTask(${index})">
        <span class="material-symbols-outlined ">
            stylus
         </span></button>
        </div>
        <!--End  Tasks-->
        
        </div>`

        index++;
    }
}

let addbutton=document.getElementById("add-btn");

console.log(addbutton)

addbutton.addEventListener("click",function(){

    let newTaskmessage=prompt("Please type your Task");
    if(newTaskmessage){
    let nowdate=new Date();
    let taskdate=nowdate.getDate() +"/"+ (nowdate.getMonth()+1) + "/"+ nowdate.getFullYear()+" | "+ nowdate.getHours();

    let newtask=new Task(newTaskmessage,taskdate,false);
    
    tasks.push(newtask);

   localstorage();
    fulltask();
}

})


function deleteTask (index){

    let isConfirm=confirm(`Are you sure to delete ${tasks[index].title}? `)
    console.log(isConfirm)
    if(isConfirm){
        tasks.splice(index,1);
        localstorage()
    }
    fulltask();

}

function editTask (index){

    let editTask=prompt(`change name of Tasks`, tasks[index].title)
    console.log(editTask)
    if(editTask){
        tasks[index].title=editTask;
        localstorage()
        fulltask();
    }


}



function toggleTaskComplation(index){

    tasks[index].isDone=!tasks[index].isDone;
    fulltask();
}


function localstorage()
{

    let newstor=JSON.stringify(tasks);
    localStorage.setItem("tasks",newstor);
}