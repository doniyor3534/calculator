
let calCount = document.querySelector('.calCount')
let amalCount = document.querySelector('.amal')
let btns = document.querySelectorAll('.btn')

amalCount.innerHTML = ''
calCount.innerHTML = ''


btns.forEach((e)=>{
    e.addEventListener('click',()=>{
        console.log(calCount.innerHTML);
        if(e.textContent / 2 >= 0){
            calCount.innerHTML += e.textContent
        }
        else if(e.textContent ==='ac'){
            calCount.innerHTML = ''
        }
        else if(e.textContent === '+'){
            a = calCount.innerHTML;
            amalCount.innerHTML = '+';
            calCount.innerHTML = '';
        }
        else if(e.textContent === '-'){
            a = calCount.innerHTML;
            amalCount.innerHTML = '-';
            calCount.innerHTML = '';
        }
    })
})
