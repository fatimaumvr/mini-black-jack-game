const startButton=document.getElementById('startbtn')
const newGameButton=document.getElementById('newbtn')
let card=document.getElementById('cards')
let summ=document.getElementById('sum')
let gametext=document.getElementById('text')


let total=0

startButton.addEventListener('click',function(){
    if(total===0){
 let rand=Math.round(Math.random()*21)
 card.textContent+=rand+' '
 total+=rand
 summ.textContent=`Sum: ${total}`
    }
})



