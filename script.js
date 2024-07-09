let input=document.querySelector("input");
let add=document.querySelector(".add");
// let taskbox=document.querySelector(".task-box");
let ul=document.querySelector(".lists");


add.addEventListener("click",()=>{
    if(input.value==""){
        alert("Please write a task first.");
    }
    else{
        let list=document.createElement("div");
        list.setAttribute("class","list");
        ul.append(list);
        let li=document.createElement("li");
        li.setAttribute("class","taskbar");
        li.innerText=input.value;
        list.append(li);
        input.value="";
        let btns=document.createElement("div");
        btns.setAttribute("id","btns");
        list.append(btns);
        let done=document.createElement("button");
        done.setAttribute("id","done");
        done.innerHTML="Done";
        let dlt=document.createElement("button");
        dlt.setAttribute("id","delete");
        dlt.innerText="Delete";
        btns.append(done);
        btns.append(dlt);
    }
})

ul.addEventListener("click",(event)=>{
    if(event.target.id=="delete"){
        let task=event.target.parentElement.parentElement;
        task.remove();
    }
    else if(event.target.id=="done"){
        let task=event.target.parentElement.parentElement;
        console.log(task);
        task.style.textDecoration="line-through";
    }
    else{
        console.log("Not deleted");
    }
})

