const main = document.querySelector('main')
const root = document.querySelector(':root')
const input = document.getElementById('input')
const resultInput = document.getElementById('result')

const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

document.querySelectorAll('.charKey').forEach(function(keybtn){
   keybtn.addEventListener('click', ()=>{
      console.log(keybtn)
      const value = keybtn.dataset.value
      input.value += value
      input.focus()
   })
}) 

document.getElementById('clear').addEventListener('click', function(){
   input.value = ''
   input.focus()
})

input.addEventListener('keydown', (ev)=>{
   ev.preventDefault()
   // console.log(ev)
   if(allowedKeys.includes(ev.key)){
      input.value+=ev.key
      return
   }
   if(ev.key ==='Backspace'){
      input.value = input.value.slice(0,-1)
   }
   if(ev.key ==='Enter'){
      calculate()
   }
})

document.getElementById('equal').addEventListener('click',calculate)

function calculate() {
   resultInput.value = "ERROR"
   resultInput.classList.add("error")
   const result = eval(input.value)
   resultInput.value = result
   resultInput.classList.remove("error")
}

document.getElementById('copyToClipBoard').addEventListener('click',(ev)=>{
   const btn = ev.currentTarget //pode ser target tbm
   // console.log(btn)
   if(btn.innerText === 'Copiar'){
      btn.innerText = 'COPIADO!'
      btn.classList.add('success')
      navigator.clipboard.writeText(resultInput.value)  
      
   }else{
      btn.innerText = 'Copiar'
      btn.classList.remove('success')
      resultInput.value = ''
   }
})

document.getElementById('themeSwitcher').addEventListener('click',()=>{
   if(main.dataset.theme === 'dark'){
      root.style.setProperty('--bgColor','rgba(255, 255, 255, 0.885)')
      root.style.setProperty('--fontColor','rgb(17, 16, 16)')
      main.dataset.theme = 'light'
      root.style.setProperty('--primaryColor','rgb(11, 169, 193)')
   }
   else{
      root.style.setProperty('--bgColor','rgb(17, 16, 16)')
      root.style.setProperty('--fontColor','rgba(255, 255, 255, 0.885)')
      root.style.setProperty('--primaryColor','rgb(16, 235, 231)')
      main.dataset.theme ='dark'
   }
})
// rgb(16, 235, 231)
