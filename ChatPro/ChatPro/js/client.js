const socket = io('http://localhost:8000')
const form = document.getElementById("myform")
const msg = document.getElementById("msg")
const firstsection = document.getElementById("first")

const name =  prompt("Enter Your Name to Join the Chat :  ")
socket.emit('new-user-joined',name)

const append = (message,position)=>{
    const p = document.createElement("p")
    const text = document.createTextNode(message)
    p.append(text)
    p.classList.add(position)
    firstsection.appendChild(p)
}

socket.on('user-joined',name=>{
    append(`${name} joined the Chat`,'center')
})

socket.on('receive',data=>{
    append(`${data.name} : ${data.message}`,'left')
})

socket.on('left',name=>{
    append(`${name} left the Chat`,'center')
})

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const message = msg.value
    append(`${message} : You`,'right')
    socket.emit('send',message)
    msg.value=""
})