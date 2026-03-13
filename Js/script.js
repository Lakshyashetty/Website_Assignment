// DARK MODE

document.getElementById("modeToggle")?.addEventListener("click",()=>{

document.body.classList.toggle("dark")

})


// TRAINER SHOW MORE

document.querySelectorAll(".show-more").forEach(btn=>{

btn.addEventListener("click",()=>{

const info = btn.nextElementSibling

info.classList.toggle("show")

btn.textContent = info.classList.contains("show")
? "Show Less"
: "Show More"

})

})


// COUNTER

document.querySelectorAll(".counter").forEach(counter=>{

let target = +counter.dataset.target

let count = 0

let step = target/100

function update(){

count += step

if(count < target){

counter.innerText = Math.floor(count)

requestAnimationFrame(update)

}
else{
counter.innerText = target
}

}

update()

})


// BMI

function calculateBMI(){

let w = document.getElementById("weight").value
let h = document.getElementById("height").value/100

let bmi = (w/(h*h)).toFixed(1)

document.getElementById("bmiResult").innerText =
"Your BMI: "+bmi

}


// GSAP

gsap.from(".hero h1",{y:80,opacity:0,duration:1})
gsap.from(".hero p",{y:80,opacity:0,duration:1,delay:0.3})


// AOS

AOS.init({
duration:1000,
once:true
})