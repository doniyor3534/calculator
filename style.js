
let calCount = document.querySelector('.calCount')
let amalCount = document.querySelector('.amal')
let btns = document.querySelectorAll('.btn')

amalCount.innerHTML = ''
calCount.innerHTML = ''


btns.forEach((e)=>{
    e.addEventListener('click',()=>{
        if(e.textContent / 2 >= 0){
            calCount.innerHTML += e.textContent
        }
        else if(e.textContent ==='ac'){
            calCount.innerHTML = ''
            amalCount.innerHTML = ''
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
        else if(e.textContent === 'x'){
            a = calCount.innerHTML;
            amalCount.innerHTML = 'x';
            calCount.innerHTML = '';
        }
        else if(e.textContent === '/'){
            a = calCount.innerHTML;
            amalCount.innerHTML = '/';
            calCount.innerHTML = '';
        }
        else if(e.textContent === '='){
            
            b = calCount.innerHTML;
            switch(amalCount.innerHTML){
                case '+':{
                    return (
                        calCount.innerHTML = Number(a) + Number(b),
                        a='',
                        b='',
                        amalCount.innerHTML=''
                    )
                }break
                case '-':{
                    return calCount.innerHTML =  Number(a) - Number(b),
                    a='',
                    b='',
                    amalCount.innerHTML=''
                }break
                case '/':{
                    return calCount.innerHTML =  Number(a) / Number(b),
                    a='',
                    b='',
                    amalCount.innerHTML=''
                }break
                case 'x':{
                    return  calCount.innerHTML =  Number(a) * Number(b),
                    a='',
                    b='',
                    amalCount.innerHTML=''
                }break
                default:return 'not found...'
            }
        }
    })
})
