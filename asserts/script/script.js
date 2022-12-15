const buttons = document.querySelectorAll('.bleuk')
let bt1 = document.getElementById('1')
let bt2 = document.getElementById('2')
let bt3 = document.getElementById('3')
let bt4 = document.getElementById('4')
let bt5 = document.getElementById('5')
let bt6 = document.getElementById('6')
let bt7 = document.getElementById('7')
let bt8 = document.getElementById('8')
let bt9 = document.getElementById('9')
let changeValue
let x = [1,2,3,6,9,8,7,4]

bt5.addEventListener('click', function() { 
    clockWise()
    rename()
})

for (const i of buttons) {
    i.addEventListener('click', function() { 
        antiClockWise()
        rename()
    })
}


 function clockWise() {
        changeValue = x.pop()
        x.unshift(changeValue)
}


function rename() {

    bt1.innerHTML = x[0]
    bt2.innerHTML = x[1]
    bt3.innerHTML = x[2]
    bt4.innerHTML = x[7]
    bt6.innerHTML = x[3]
    bt7.innerHTML = x[6]
    bt8.innerHTML = x[5]
    bt9.innerHTML = x[4]

    
}

function antiClockWise() {
    changeValue = x.shift()
        x.push(changeValue)
}


