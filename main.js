let rock=document.getElementById("rock")
let paper=document.getElementById("paper")
let scissor=document.getElementById("scissor")
let reset=document.getElementById("reset")
let compscore=document.getElementById("compscore")
let userscore=document.getElementById("userscore")
let restxt=document.getElementById("restxt")
let disclickme=document.getElementById("disclickme")
let disclickcomp=document.getElementById("disclickcomp")

let uscore=0
let cscore=0


rock.addEventListener("click",()=>{
    disclickme.innerHTML="Rock"
    choosecomp()
})
paper.addEventListener("click",()=>{
    disclickme.innerHTML=" Paper"
    choosecomp()
})
scissor.addEventListener("click",()=>{
    disclickme.innerHTML="Scissor"
    choosecomp()
})




function choosecomp(){
    let arr=["Rock","Paper","Scissor"]
    let a=Math.floor(Math.random()*3)
    let comchoice=arr[a]
    disclickcomp.innerHTML=comchoice
    let userchoice=disclickme.textContent.trim()
    let compchoice=disclickcomp.textContent.trim()
    console.log(userchoice)
    console.log(compchoice)
        if(userchoice==="Rock" && compchoice==="Scissor"){
        restxt.textContent="🎉 You win"
        uscore++
        userscore.textContent=uscore
    }else if(userchoice==="Paper" && compchoice==="Rock"){
        restxt.textContent="🎉 You win"
        uscore++
        userscore.textContent=uscore
    }else if(userchoice==="Scissor" && compchoice==="Paper"){
        restxt.textContent="🎉 You win"
        uscore++
        userscore.textContent=uscore
    }
    else if(compchoice==="Rock" && userchoice==="Scissor"){
        restxt.textContent="🎉 Computer win"
        cscore++
        compscore.textContent=cscore

    }else if(compchoice==="Paper" && userchoice==="Rock"){
        restxt.textContent="🎉 Computer win"
        cscore++
        compscore.textContent=cscore
    }else if(compchoice==="Scissor" && userchoice==="Paper"){
        restxt.textContent="🎉 Computer win"
        cscore++
        compscore.textContent=cscore
    }
    else{
        restxt.textContent="Draw"
    }
}

reset.addEventListener("click",()=>{
    uscore = 0
    cscore = 0
    restxt.textContent="Choose Your Weapon [🪨 📄 ✂️]"
    disclickme.textContent=""
    disclickcomp.textContent=""
    userscore.textContent=uscore
    compscore.textContent=cscore
})
