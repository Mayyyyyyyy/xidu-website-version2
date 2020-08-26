function toTop(){
    document.body.scrollTop=0;
    document.documentElement.scrollTop= 0;
}

// slide show

var span=document.querySelectorAll("span");
var index=0;

function lineColor(){
    for(var i=0; i< span.length ;i++){
        span[i].style.background="white";
    }
    span[index].style.background="black";
}
lineColor();

var listName = ["list1", "list2", "list3", "list4", "list5", "list6"];
var allList=document.querySelector(".slideshow").children;
var list1=document.querySelector(".list1");
var list2 = document.querySelector(".list2");
var list3 = document.querySelector(".list3");
 
function next(){
    listName.unshift(listName[5]);
    listName.pop();
    for(var i=0 ;i<6 ;i++){
        allList[i].setAttribute("class",listName[i]);
    }
    console.log(listName);
    index++;
    if(index>5){index=0 ;}
    lineColor();
    
}

function prev(){
    listName.push(listName[0]);
    listName.shift(listName[0]);
    for (var i = 0; i < 6; i++) {
        allList[i].setAttribute("class", listName[i]);
    }
    index--;
    if (index <0) { index = 5; }
    lineColor();
}

var imgList=document.querySelector(".imgList");
imgList.addEventListener("click",function(e){
   if(e.target.parentNode.getAttribute("class")=="list3"){
       next();
   } else if (e.target.parentNode.getAttribute("class") == "list1"){
       prev();
   }
})




