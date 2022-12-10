'use strict'
const input = document.querySelector('input')
const button = document.querySelector('button')
const warningText = document.querySelector('.warning')
const accepted = document.querySelector('.accepted')
document.addEventListener('keyup', function(){
    if(input.value.endsWith('@gmail.com') || input.value.endsWith('@email.com')){
        button.style.backgroundImage = 'linear-gradient(135deg, hsl(0, 80%, 86%), hsl(0, 74%, 74%) )'
        document.querySelector('.email div').style.display = 'none'
        document.querySelector('.email').style.border = '2px solid hsl(0, 74%, 74%)'
        warningText.style.display = 'none'
        button.addEventListener('click', function(){
            setTimeout(() => {
            accepted.style.display = 'none'
            }, 6000);
            accepted.style.display = 'block'
            input.value = ''
        })
    }
    else{
        warningText.style.display = 'block'
        document.querySelector('.email div').style.display = 'block'
        document.querySelector('.email').style.border = '5px solid hsl(0, 93%, 68%)'
    }
    })