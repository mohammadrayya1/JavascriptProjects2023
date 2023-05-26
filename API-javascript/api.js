


// let response = new XMLHttpRequest();

// response.open("GET","https://jsonplaceholder.typicode.com/posts")
// response.responseType="json";
// response.send();
// response.onload=()=>{

//     let posts=response.response;
//     for(post of posts){

//         document.getElementById("posts").innerHTML+=`
        
//         <h1> ${post.title}</h1>
        
//         `
//     }
// }



function getallusers(){
    let response=new XMLHttpRequest();

response.open("GET","https://jsonplaceholder.typicode.com/users");
response.responseType="json";
response.send();
response.onload=()=>{

    let content= response.response;

        for(user of content){
            document.querySelector(".user-content").innerHTML += `
            <div  onclick=getpostes_of_user(${user.id},this) id="" class=" user ">
                    <h3>user ${user.name}</h3>
                   <h3>${user.email}</h3>
             </div>
            `
    
        }
}
}



 function getposted(){
    let response=new XMLHttpRequest();
response.open("GET","https://jsonplaceholder.typicode.com/posts");
response.responseType="json";
response.send();
response.onload=()=>{

    if(response.status>=200 && response.status<=300){
    let posts= response.response;
    document.querySelector(".posts").innerHTML = " "
    for(post of posts){
        document.querySelector(".posts").innerHTML += `
       
        <div class="post">
            <h3>${post.title}</h3>
            <h4>${post.body}</h4>
        </div>
        `

    }
    }

}
 }



 getallusers()
 getposted()


 function getpostes_of_user(id,el){

    allSelected = document.getElementsByClassName("selected");
    for(select of allSelected){
        select.classList.remove("selected");
    }
    el.classList.add("selected");
    let response=new XMLHttpRequest();

    response.open("GET",`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
    response.responseType="json";
    response.send();
    response.onload=()=>{
    
        if(response.status>=200 && response.status<=300){
        let posts= response.response;
        document.querySelector(".posts").innerHTML = " "
        for(post of posts){
            document.querySelector(".posts").innerHTML += `
           
            <div class="post">
                <h3>${post.title}</h3>
                <h4>${post.body}</h4>
            </div>
            `
    
        }
        }
    
    }

 }
