
let container = document.querySelector(".container")

container.addEventListener("click" , (e)=>{
    if(e.target.className === "question" ){
        e.target.parentElement.classList.toggle("active")
    }
})
