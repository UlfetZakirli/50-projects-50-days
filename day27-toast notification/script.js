const toasts=document.getElementById('toasts')
const button=document.getElementById('button')

const messages=[
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four'
]
const types=[
    'success','info','error'
]

button.addEventListener('click',()=>createNotification())

const createNotification=(message=null, type=null)=>{
const notif=document.createElement('div')
notif.classList.add('toast')
notif.classList.add(type? type:getRandomType())

notif.innerText=message? message : getRandomMessage()
toasts.appendChild(notif)


setInterval(()=>{
    notif.remove()
},3000)
}
function getRandomType(){
    return types[Math.floor(Math.random()*types.length)]
}

const getRandomMessage=()=>{
    return messages[Math.floor(Math.random()*messages.length)]
}