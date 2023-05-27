

let p =new Promise((resolve,reject)=>{


    let done=false;
    if(done){
        resolve("hello");
    }else{
        reject("failer");
    }

});



p.then((ele)=>{

   console.log(ele);
}).catch((rej)=>{

    console.log(rej);
})


