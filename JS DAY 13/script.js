console.log("Start....");
function login(uname,password,cb){

    setTimeout(()=>{
    cb({uname:uname,isLoggedIn:true,Message: "Login Successfull"});
    },1000);
}

function getVideoList(email,cb){
    setTimeout(()=>{
        cb([{title:"Video1"},{title:"Video2"}]);
    },2000)
}

function getVideoDetail(video,cb){
    setTimeout(()=>{
        cb({title:video.title,description:"This is a video about " + video.title})
    },2000)
}

login("aadit@gmail.com","password123",(userdata)=>{
    console.log(userdata);
    getVideoList(userdata.uname,(videolist)=>{
        console.log(videolist);
        getVideoDetail(videolist[0],(videoDetail)=>{
            console.log(videoDetail);
        })
    });
});


console.log("End....")