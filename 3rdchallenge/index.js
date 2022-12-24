const submit_btn=document.querySelector(".subm")
const submit=document.querySelector(".submit")
const thankyou = document.querySelector(".thankyou")
const ratingbutn = document.querySelectorAll(".numb")


submit_btn.addEventListener("click",onsubmit)

ratingbutn.forEach(btn =>{
    btn.addEventListener("click",handelRatingBtnClick)
})
function onsubmit(){
    submit.classList.add("hidden")
    thankyou.classList.remove("hidden")
    console.log('submit click')
}



