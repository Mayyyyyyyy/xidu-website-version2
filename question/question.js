const questions = document.querySelectorAll(".question");
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn){  
    btn.addEventListener("click",function(e){
        const question = e.currentTarget.parentElement.parentElement;
        question.classList.toggle("show");
        questions.forEach(function(item){
           if(item != question){
               item.classList.remove("show");
           }
        })
    })
})